import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCardAnalyst';
import { Article } from '../Article';
import '../CSS/ShowArticleList.css';
import SearchBar from '../SearchBar';

function AnalystHome() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pendingArticles, setPendingArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [showApproved, setShowApproved] = useState(true); // State for filtering approved articles

  useEffect(() => {
    fetch('http://localhost:8082/api/Articles')
      .then((res) => res.json())
      .then((articles) => {
        // Filter approved and pending articles
        const approvedArticles = articles.filter((article: Article) => article.status === 'approved');
        const pendingArticles = articles.filter((article: Article) => article.status === 'Pending');
        setArticles(approvedArticles);
        setPendingArticles(pendingArticles);
        setFilteredArticles(approvedArticles); // Initialize filtered articles with approved ones
      })
      .catch((err) => {
        console.log('Error from ShowArticleList: ' + err);
      });
  }, []);

  // Filter articles based on the showApproved state
  const filterArticles = useCallback(() => {
    if (showApproved) {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(pendingArticles);
    }
  }, [showApproved, articles, pendingArticles]); // Add articles and pendingArticles as dependencies

  useEffect(() => {
    filterArticles(); // Apply filter whenever showApproved state changes
  }, [showApproved, filterArticles]); // Use filterArticles as a dependency


  const articleList =
    filteredArticles.length === 0
      ? <p>No matching articles found!</p>
      : filteredArticles.map((article, index) => (
          <ArticleCard article={article} key={index} />
      ));

  const queueButtonContent =
    pendingArticles.length === 0 ? 'Queue (Empty)' : `Queue! (${pendingArticles.length} pending)`;

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

        {/* Task Bar */}
        <div className='taskbar'>
          <button className='btn btn-outline-primary' onClick={() => setShowApproved(true)}>
            Show Approved Articles
          </button>
          <button className='btn btn-outline-secondary' onClick={() => setShowApproved(false)}>
            {queueButtonContent}
          </button>
        </div>

        <div className='list'>{articleList}</div>
      </div>
    </div>
  );
}

export default AnalystHome;
