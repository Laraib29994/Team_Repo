import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCardModerator';
import { Article } from '../Article';
import '../CSS/ShowArticleList.css';

function ModeratorHome() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pendingArticles, setPendingArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/Articles')
      .then((res) => res.json())
      .then((articles) => {
        // Filter approved and pending articles
        const approvedArticles = articles.filter((article: Article) => article.status === 'approved');
        const pendingArticles = articles.filter((article: Article) => article.status === 'Pending');
        setArticles(approvedArticles);
        setPendingArticles(pendingArticles);
      })
      .catch((err) => {
        console.log('Error from ShowArticleList: ' + err);
      });
  }, []);

  const articleList =
    articles.length === 0
      ? 'There is no article record!'
      : articles.map((article, k) => <ArticleCard article={article} key={k} />);

  const queueButtonContent =
    pendingArticles.length === 0 ? 'Queue (Empty)' : `Queue! (${pendingArticles.length} pending)`;

  /*const queueButtonStyle = {
    backgroundColor: pendingArticles.length === 0 ? 'grey' : 'orange',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textDecoration: 'none',
  };*/

  return (
    <div className='ShowArticleList'>
      <div className='container'>
        <div className="logo-container">
          <h1 className="logo">SPEED</h1>
          <p className="smalltext">Software Practice Empiracal Evidence Database</p>
          <Link href="/" className="signOut">Sign out</Link>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h1 className='title'>Articles List</h1>
          </div>


          <div className='col-md-11'>
            <Link href='/queue' className='btn btn-outline-warning float-left'>
              {queueButtonContent}
            </Link>

            <Link href='/create-article' className='btn btn-outline-warning float-right'>
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

export default ModeratorHome;
