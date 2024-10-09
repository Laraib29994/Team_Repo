import React from 'react';
import { Article } from './Article';
import { useRouter } from 'next/navigation';

interface IProp {
  article?: Article;
}

const ArticleCard = ({ article }: IProp) => {
  const router = useRouter();

  if (article === undefined) {
    return null; // Return null if no article is provided
  }

  const onClick = () => {
    router.push(`/show-article/${article._id}`); // Navigate to the article's detail page
  };

  return (
    <div className='card-container' onClick={onClick}>
      <img
        src='https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Article Image' // Updated alt text for clarity
        height={210}
      />
      <div className='desc'>
        <h2>Title: {article.title}</h2>
        <h3>Author/s: {article.authors}</h3>
        <p>DOI: {article.DOI}</p>
        <p>Pub Year: {article.publication_year ? article.publication_year.toString().split('-')[0] : 'N/A'}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
