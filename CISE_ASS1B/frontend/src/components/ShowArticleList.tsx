import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCard';
import { Article } from './Article';
import './ShowArticleList.css';

function ShowArticleList() {
  const [articles, setArticles] = useState<[Article?]>([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/Articles')
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log('Error from ShowArticleList: ' + err);
      });
  }, []);

  const articleList =
    articles.length === 0
      ? 'There is no article record!'
      : articles.map((article, k) => <ArticleCard article={article} key={k} />);

  return (
    <div className='ShowArticleList'>
      <div className='container'>
      <div className="logo-container">
      <h1 className="logo">SPEED</h1>
      <p className="smalltext">Software Practice Empiracal Evidence Database</p>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h1 className='title'>Articles List</h1>
          </div>

          <div className='col-md-11'>
            <Link
              href='/create-article'
              className='btn btn-outline-warning float-right'
            >
              + Add New Article
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{articleList}</div>
      </div>
    </div>
  );
}

export default ShowArticleList;
