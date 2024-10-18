'use client'; // This is required to use React features in this component

import ShowArticleList from "@/./components/User/ShowArticleList";
import NavBar from "@/./components/User/NavBar";

export default function Home() {

  return (
    <main>
        <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Articles" />
        <ShowArticleList/>
    </main>
  );
}
