import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCardModerator';
import { Article } from '../Article';
import '../CSS/NavBar.css';  // Ensure this path is correct

interface NavbarProps {
  title: string;
  subtitle: string; // Add subtitle to props
  initialPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, subtitle, initialPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

const [articles, setArticles] = useState<Article[]>([]);
  const [pendingArticles, setPendingArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Articles`)
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

  const queueButtonContent =
    pendingArticles.length === 0 ? 'QUEUE (Empty)' : `Queue! (${pendingArticles.length} pending)`;


  return (
    <nav className="navbar">
      {/* Left: Website Title */}
      <div className="header">
        <Link href="/Moderator-home" className="header">SPEED</Link>
        <div className="subtitle">{subtitle}</div> {/* Render subtitle here */}
      </div>

      {/* Center: Current Page */}
      <div className="current-page">{initialPage}</div>

      {/* Right: Dropdown Menu */}
      <div className="dropdown-container">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
        <span className={`arrow ${isDropdownOpen ? 'open' : 'closed'}`}></span>
         
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <Link href="/Moderator-home">ARTICLES</Link>
            <Link href="/create-article-moderator">CREATE ARTICLES</Link>
            <Link href="/">SIGN OUT</Link>
            <Link href='/queue'>
              {queueButtonContent}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
