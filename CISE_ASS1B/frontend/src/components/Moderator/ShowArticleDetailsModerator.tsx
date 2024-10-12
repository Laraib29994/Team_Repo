'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article, DefaultEmptyArticle } from '../Article'; // Ensure correct import path
import Link from 'next/link';

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
        router.push('/Moderator-home'); // Navigate back to the article list after deletion
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
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{article.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Authors</td>
            <td>{article.authors}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>DOI</td>
            <td>{article.DOI}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Publication Year</td>
            <td>{article.publication_year?.toString()}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Volume</td>
            <td>{article.volume}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Number</td>
            <td>{article.number}</td>
          </tr>
          <tr>
            <th scope='row'>7</th>
            <td>Pages</td>
            <td>{article.pages}</td>
          </tr>
          <tr>
            <th scope='row'>8</th>
            <td>Content</td>
            <td>{article.content}</td> {/* Added content field */}
          </tr>
          <tr>
            <th scope='row'>9</th>
            <td>Updated Date</td>
            <td>{article.updated_date?.toString()}</td>
          </tr>
          <tr>
            <th scope='row'>9</th>
            <td>Status</td>
            <td>{article.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowArticleDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link href='/Moderator-home' className='btn btn-outline-warning float-left'>
              Show Article List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Article&apos;s Record</h1>
            <p className='lead text-center'>View Article&apos;s Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{ArticleItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => onDeleteClick(article._id || '')}
            >
              Delete Article
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              href={`/edit-article/${article._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowArticleDetails;
