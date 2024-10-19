import React from 'react';
import { Article } from '../Article';
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
      </div>
    </div>
  );
};

export default ArticleCard;
