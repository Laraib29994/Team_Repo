'use client'

import UpdateArticleInfo from "@/components/Analyst/UpdateArticleInfo";
import NavBar from "@/components/Analyst/NavBarAnalyst";

export default function ShowArticle() {
  return (
  <div>
    <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Edit Article" />
    <UpdateArticleInfo />
  </div>
  )
}