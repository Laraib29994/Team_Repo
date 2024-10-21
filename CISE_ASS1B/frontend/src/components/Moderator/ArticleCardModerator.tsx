import React, { useState } from 'react';
import { Article } from '../Article';
import { useRouter } from 'next/navigation';
import '../CSS/ShowArticleList.css';

interface IProp {
  article?: Article;
}

const ArticleCard = ({ article }: IProp) => {
  const router = useRouter();
  const [rating, setRating] = useState<number>(article?.rating || 0);
  const [hovered, setHovered] = useState<number>(0);

  if (article === undefined) {
    return null; // Return null if no article is provided
  }

  const handleRatingClick = async (newRating: number, event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation(); // Prevent event from bubbling up
    event.preventDefault();  // Prevent default behavior if needed
    setRating(newRating); // Update local state optimistically

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${article._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rating: newRating }), // Include the rating in the payload
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update rating. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Updated Article:', data); // Log the updated article
    } catch (error) {
      console.error('Error updating rating:', error); // Log the error for debugging
      alert('Failed to update the rating. Please try again.'); // Optional user feedback
    }
  };

  const onClick = () => {
    router.push(`/show-article-moderator/${article._id}`); // Navigate to the article's detail page
  };

  return (
    <div className='card-container' onClick={onClick}>
      <img className='img1'
        src='https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Article Image' // Updated alt text for clarity 
        />
      <div className='desc'>
        <h2>TITLE: {article.title}</h2>
        <p><span className='label'>AUTHOR/S:</span> {article.authors}</p>
      <p><span className='label'>DOI:</span> {article.DOI}</p>
      <p><span className='label'>PUBLISH YEAR:</span> {article.publication_year ? article.publication_year.toString().split('-')[0] : 'N/A'}</p>
      <p><span className='label'>DESCRIPTOR:</span> {article.descriptor}</p>

             {/* Rating Buttons */}
             <div className="rating">
        <p><span className='label'>RATING:</span></p>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`star ${num <= rating ? 'filled' : ''}`}
              onClick={(event) => handleRatingClick(num, event)}
              onMouseEnter={() => setHovered(num)} // Track hover
              onMouseLeave={() => setHovered(0)} // Reset hover on leave
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
