'use client'; // This is required to use React features in this component

import ShowArticleList from "@/components/ShowArticleList"; // Import your article list component
import Header from "@/components/Nav/Header"; // Import the Header component

export default function Home() {
  return (
    <main>
      <Header /> {/* This will render the menu bar */}
      <ShowArticleList /> {/* This will render your article list */}
    </main>
  );
}
