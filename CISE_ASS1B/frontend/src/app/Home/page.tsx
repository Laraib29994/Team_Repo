'use client'

import ShowArticleList from "@/./components/ShowArticleList";
import NavBar from "@/./components/NavBar";
//import Navbar from "@/components/Nav/NavBar.tsx";

export default function Home() {

  return (
    <main>
        <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Articles" />
        <ShowArticleList/>
    </main>
  );
}
