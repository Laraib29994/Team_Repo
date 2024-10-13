'use client'

import ModeratorHome from "@/components/Moderator/ModeratorHome";
import NavBar from "@/./components/Moderator/NavBarModerator";

export default function Moderator_home() {
  return (
  <div>
    <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Articles-Moderator" />
    <ModeratorHome/>
  </div>
  )
}
