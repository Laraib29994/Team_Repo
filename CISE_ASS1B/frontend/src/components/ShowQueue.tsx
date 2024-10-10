import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import QueueCard from './QueueCard';
import { Article } from './Article';
import './CSS/ShowQueue.css';

function ShowQueue() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/Articles')
      .then((res) => res.json())
      .then((articles) => {
        // Filter only articles with status 'pending'
        const pendingArticles = articles.filter((article: Article) => article.status === 'Pending');
        setArticles(pendingArticles);
      })
      .catch((err) => {
        console.log('Error from ShowQueue: ' + err);
      });
  }, []);

  const articleList =
    articles.length === 0
      ? 'There is no pending article record!'
      : articles.map((article, k) => <QueueCard article={article} key={k} />);

  return (
    <div className='ShowQueue'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Pending Articles List</h2>
          </div>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link href='/' className='btn btn-outline-warning float-left'>
              Show Article List
            </Link>
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

          <div className='list'>{articleList}</div>
        </div>
      </div>
    </div>
  );
}

export default ShowQueue;
