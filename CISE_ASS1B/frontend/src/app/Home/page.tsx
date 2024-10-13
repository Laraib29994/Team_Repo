'use client'; // This is required to use React features in this component

import ShowArticleList from "@/./components/ShowArticleList";
import NavBar from "@/./components/NavBar";

export default function Home() {

  return (
    <main>
        <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Articles" />
        <ShowArticleList/>
    </main>
  );
}
