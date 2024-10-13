import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCardModerator';
import { Article } from '../Article';
import '../CSS/ShowArticleList.css';
import SearchBar from '../SearchBar';

function ModeratorHome() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pendingArticles, setPendingArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

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
  filteredArticles.length === 0
      ? <p>No matching articles found!</p>
      : filteredArticles.map((article, index) => (
          <ArticleCard article={article} key={index} />
      ));

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
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h1 className='title'>Articles List</h1>
            <SearchBar articles={articles} setFilteredArticles={setFilteredArticles} />
          </div>
        </div>
        <div className='list'>{articleList}</div>
      </div>
    </div>
  );
}

export default ModeratorHome;
