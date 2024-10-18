'use client'

import ShowArticleDetails from "@/components/User/ShowArticleDetails";
import NavBar from "@/./components/User/NavBar";

export default function ShowArticle() {
  return (
  <div>
    <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Articles" />
    <ShowArticleDetails />
  </div>
  )
}
