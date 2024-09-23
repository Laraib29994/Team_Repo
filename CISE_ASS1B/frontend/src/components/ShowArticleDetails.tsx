'use client'

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article, DefaultEmptyArticle } from './Article';
import Link from 'next/link';

function ShowArticleDetails() {
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);

  const id = useParams<{ id: string }>().id;
  const navigate = useRouter();

  useEffect(() => {'use client'

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article, DefaultEmptyArticle } from './Article';
import Link from 'next/link';

function ShowArticleDetails() {
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);
  const { id } = useParams<{ id: string }>();
  const navigate = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setArticle(json);
      })
      .catch((err) => {
        console.log('Error from ShowArticleDetails: ' + err);
      });
  }, [id]);

  const onDeleteClick = (id: string) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`, { method: 'DELETE' })
      .then(() => {
        navigate.push('/');
      })
      .catch((err) => {
        console.log('Error from ShowArticleDetails_deleteClick: ' + err);
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
            <td>Authors</td> {/* Updated to 'Authors' */}
            <td>{article.authors}</td> {/* Changed to match updated type */}
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Publisher</td>
            <td>{article.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Published Date</td>
            <td>{article.publication_year?.toLocaleDateString()}</td> {/* Formatting date */}
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Descriptor</td>
            <td>{article.descriptor}</td>
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
            <Link href='/' className='btn btn-outline-warning float-left'>
              Show Article List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Article's Record</h1>
            <p className='lead text-center'>View Article's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{ArticleItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(article._id || "");
              }}
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

    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/articles/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setArticle(json);
      })
      .catch((err) => {
        console.log('Error from ShowArticleDetails: ' + err);
      });
  }, [id]);

  const onDeleteClick = (id: string) => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/articles/${id}`, { method: 'DELETE' })
      .then(() => {
        navigate.push('/');
      })
      .catch((err) => {
        console.log('Error from ShowArticleDetails_deleteClick: ' + err);
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
            <td>Author</td>
            <td>{article.author}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Publisher</td>
            <td>{article.publisher}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Published Date</td>
            <td>{article.published_date?.toString()}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Descriptor</td>
            <td>{article.descriptor}</td>
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
            <Link href='/' className='btn btn-outline-warning float-left'>
              Show Article List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Article's Record</h1>
            <p className='lead text-center'>View Article's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{ArticleItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(article._id || "");
              }}
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
