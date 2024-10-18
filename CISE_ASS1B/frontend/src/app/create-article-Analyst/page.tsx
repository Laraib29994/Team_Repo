'use client'

import CreateArticleComponent from "@/components/Analyst/CreateArticleAnalyst";
import NavBar from "@/./components/Analyst/NavBarAnalyst";

export default function CreateArticle() {
  return (
    <main>
       <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Create Article" />
      <CreateArticleComponent/>
    </main>
  );
}
