'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article, DefaultEmptyArticle } from '../Article'; 
import Link from 'next/link';
import '../CSS/ShowArticleDetails.css';  

function ShowArticleDetails() {
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);

  const { id } = useParams(); // Get the article ID from the URL
  const router = useRouter(); // Use router for navigation

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setArticle(json); // Set the article details from the API response
      })
      .catch((err) => {
        console.error('Error fetching article details:', err);
      });
  }, [id]);

  const onDeleteClick = (articleId: string) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${articleId}`, { method: 'DELETE' })
      .then(() => {
        router.push('/'); // Navigate back to the article list after deletion
      })
      .catch((err) => {
        console.error('Error deleting article:', err);
      });
  };

  const ArticleItem = (
    <div>
      <table className='table table-hover table-dark table-striped table-bordered'>
        <tbody>
          <tr>
            <td>Title</td>
            <td>{article.title}</td>
          </tr>
          <tr>
            <td>Authors</td>
            <td>{article.authors}</td>
          </tr>
          <tr>
            <td>Descriptor</td>
            <td>{article.descriptor}</td> {/* Added descriptor field */}
          </tr>
        </tbody>
      </table>

      <table className='table table-hover table-dark table-striped table-bordered'>
        <tbody>
          <tr>
            <td>DOI</td>
            <td>{article.DOI}</td>
          </tr>
          <tr>
            <td>Publication Year</td>
            <td>{article.publication_year?.toString()}</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>{article.volume}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{article.number}</td>
          </tr>
          <tr>
            <td>Pages</td>
            <td>{article.pages}</td>
          </tr>
          
          <tr>
            <td>Updated Date</td>
            <td>{article.updated_date?.toString()}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{article.status}</td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>{article.rating}</td>
          </tr>
        </tbody>
      </table>

      <div className='contentbox'>
      {article.content}
      </div>

    </div>
  );

  return (
    <div className='ShowArticleDetails'>
      <div className='container'>
        <div className='row'>
          <br />
          <div className='col-md-8 m-auto'>
            <p className='lead text-center'>View Article&apos;s Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{ArticleItem}</div>
        </div>
      </div>
    </div>
  );
}

export default ShowArticleDetails;
