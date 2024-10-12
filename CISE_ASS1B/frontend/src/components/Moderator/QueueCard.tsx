import React, { useState } from 'react';
import { Article } from '../Article';
import { useRouter } from 'next/navigation';

interface IProp {
  article?: Article;
}

const QueueCard = ({ article }: IProp) => {
  const router = useRouter();
  const [status, setStatus] = useState(article?.status || 'pending'); // Initialize with current status, default 'pending'

  if (!article) {
    return null; // Return null if no article is provided
  }

  const onClick = () => {
    router.push(`/show-article-moderator/${article._id}`); // Navigate to the article's detail page
  };

  const handleApprove = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card's onClick event

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${article._id}`, {
        method: 'PUT', // Use PUT to update the article
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...article, status: 'approved' }), // Only update the status to 'approved'
      });

      if (response.ok) {
        setStatus('approved'); // Update local status to 'approved'
        console.log(`Article approved: ${article.title}`);
        // Optional: Navigate or refresh the list to reflect the change
        window.location.reload();
      } else {
        console.error('Failed to approve the article');
      }
    } catch (error) {
      console.error('Error approving article:', error);
      alert('Failed to approve the article. Please try again.');
    }
  };

  const handleReject = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card's onClick event
    console.log(`Article rejected: ${article.title}`);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${article._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.location.reload();
        console.log(`Article deleted: ${article.title}`);
      } else {
        console.error('Failed to delete the article');
      }
    } catch (err) {
      console.error('Error deleting article:', err);
      alert('Failed to delete the article. Please try again.');
    }
  };

  return (
    <div className='card-container' onClick={onClick}>
      <img
        src='https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Queue Article Image'
        height={210}
      />
      <div className='desc'>
        <h2>Title: {article.title}</h2>
        <h3>Author/s: {article.authors}</h3>
        <p>DOI: {article.DOI}</p>
        <p>Pub Year: {article.publication_year ? article.publication_year.toString().split('-')[0] : 'N/A'}</p>
        <p>Status: {status}</p> {/* Display the current status of the article */}

        <div className='button-group'>
          <button onClick={handleApprove} disabled={status === 'approved'}>
            {status === 'approved' ? 'Approved' : 'Approve'}
          </button>
          <button onClick={handleReject}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default QueueCard;
