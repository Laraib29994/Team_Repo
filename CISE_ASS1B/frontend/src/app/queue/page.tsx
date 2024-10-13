'use client'

import ShowQueue from "@/components/Moderator/ShowQueue";
import NavBar from "@/./components/Moderator/NavBarModerator";

export default function Home() {
  return (
    <main>
      <NavBar title="Speed" subtitle="Software Practice Empiracal Evidence Database" initialPage="Queue" />
      <ShowQueue />
    </main>
  );
}
