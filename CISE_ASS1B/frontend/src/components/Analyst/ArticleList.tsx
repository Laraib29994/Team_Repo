// src/components/ArticleList.tsx
import React, { useState } from 'react';
import TaskBar from './TaskBar';

interface Article {
  id: number;
  title: string;
  content: string;
  approved: boolean; // Assuming articles have an approved field
}

const ArticleList: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  const filterApprovedArticles = () => {
    const approvedArticles = articles.filter((article) => article.approved);
    setFilteredArticles(approvedArticles);
  };

  return (
    <div>
      <TaskBar filterApproved={filterApprovedArticles} />
      <div className="article-list">
        {filteredArticles.map((article) => (
          <div key={article.id} className="article">
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;

