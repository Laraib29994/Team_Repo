'use client'

import ShowArticleDetailsAnalyst from "@/components/Analyst/ShowArticleDetailsAnalyst";
import NavBar from "@/./components/Analyst/NavBarAnalyst";

export default function ShowArticle() {
  return (
  <div>
      <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Article Details" />
      <ShowArticleDetailsAnalyst />
  </div>
  )
}
