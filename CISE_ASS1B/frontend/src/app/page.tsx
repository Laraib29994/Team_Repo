'use client'

import SignIn from "@/./components/SignIn";
//import Navbar from "@/components/Nav/NavBar.tsx";

export default function Signin() {

  return (
    <main>
      <SignIn/>
import { useState, useEffect } from 'react';
import ShowArticleList from "@/components/ShowArticleList";
import { Article } from "@/components/Article";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/articles') // Updated API endpoint to /articles
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setFilteredArticles(data);
      })
      .catch((err) => {
        console.log('Error fetching articles: ' + err); // Updated error message
      });

  }, []);

  return (
    <main>
      <ShowArticleList articles={filteredArticles} /> {/* Updated prop name */}
    </main>
  );
}