'use client'

import UpdateArticleInfo from "@/components/Moderator/UpdateArticleInfo";
import NavBar from "@/components/NavBar";

export default function ShowArticle() {
  return (
  <div>
    <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Edit Article" />
    <UpdateArticleInfo />
  </div>
  )
}