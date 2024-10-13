import React, { useState } from 'react';
import Link from 'next/link';
import './CSS/NavBar.css';  // Ensure this path is correct

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

  return (
    <nav className="navbar">
      {/* Left: Website Title */}
      <div className="title">
        <Link href="/Home" className="title">Speed</Link>
        <div className="subtitle">{subtitle}</div> {/* Render subtitle here */}
      </div>

      {/* Center: Current Page */}
      <div className="current-page">{initialPage}</div>

      {/* Right: Dropdown Menu */}
      <div className="dropdown-container">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Menu &#x25BC;
        </button>
        {isDropdownOpen && (
          <div className="dropdown">
            <Link href="/Home">Articles</Link>
            <Link href="/create-article">Create Articles</Link>
            <Link href="/">Sign Out</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
