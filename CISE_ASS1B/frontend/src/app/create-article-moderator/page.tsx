'use client'

import CreateArticleComponent from "@/components/CreateArticle";
import NavBar from "@/./components/Moderator/NavBarModerator";

export default function CreateArticle() {
  return (
    <main>
       <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Create Article" />
      <CreateArticleComponent/>
    </main>
  );
}
