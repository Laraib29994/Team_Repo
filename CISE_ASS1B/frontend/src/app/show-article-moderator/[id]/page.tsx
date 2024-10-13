'use client'

import ShowArticleDetailsModerator from "@/components/Moderator/ShowArticleDetailsModerator";
import NavBar from "@/./components/Moderator/NavBarModerator";

export default function ShowArticle() {
  return (
  <div>
      <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Article Details" />
      <ShowArticleDetailsModerator />
  </div>
  )
}
