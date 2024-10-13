import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Article, DefaultEmptyArticle } from '../Article';
import Link from 'next/link';
import NavBar from '../NavBar';
import '../CSS/NavBar.css'

function UpdateArticleInfo() {
  const [article, setArticle] = useState<Article>(DefaultEmptyArticle);
  const { id } = useParams(); // Getting the article ID from URL params
  const router = useRouter(); // For navigation

  useEffect(() => {
    // Fetching the article data based on the article ID
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`)
      .then((res) => res.json())
      .then((json) => setArticle(json))
      .catch((err) => console.log('Error fetching article info: ', err));
  }, [id]);

  // Handle input changes for text fields
  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  // Handle input changes for text areas
  const textAreaOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Sending the updated article info via PUT request
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(article),
    })
      .then(() => router.push(`/show-article-moderator/${id}`)) // Navigate to article details after update
      .catch((err) => console.log('Error updating article: ', err));
  };

  return (
    <div className='UpdateArticleInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <p className='lead text-center'>Update the article&apos;s information</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                type='text'
                placeholder='Title of the Article'
                name='title'
                className='form-control'
                value={article.title}
                onChange={inputOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='authors'>Authors</label>
              <input
                type='text'
                placeholder='Authors'
                name='authors'
                className='form-control'
                value={article.authors}
                onChange={inputOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='DOI'>DOI</label>
              <input
                type='text'
                placeholder='DOI'
                name='DOI'
                className='form-control'
                value={article.DOI}
                onChange={inputOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='content'>Content</label>
              <textarea
                placeholder='Content of the Article'
                name='content'
                className='form-control'
                value={article.content}
                onChange={textAreaOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='publication_year'>Publication Year</label>
              <input
                type='date'
                placeholder='Publication Year'
                name='publication_year'
                className='form-control'
                value={article.publication_year?.toString().split('T')[0] || ''}
                onChange={inputOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='volume'>Volume</label>
              <input
                type='text'
                placeholder='Volume'
                name='volume'
                className='form-control'
                value={article.volume}
                onChange={inputOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='number'>Number</label>
              <input
                type='number'
                placeholder='Number'
                name='number'
                className='form-control'
                value={article.number || ''}
                onChange={inputOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='pages'>Pages</label>
              <input
                type='number'
                placeholder='Pages'
                name='pages'
                className='form-control'
                value={article.pages || ''}
                onChange={inputOnChange}
              />
            </div>
            <br />

            <button type='submit' className='btn btn-outline-info btn-lg btn-block'>
              Update Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateArticleInfo;
