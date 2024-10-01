'use client'

import ShowArticlelist from "@/components/ShowArticlelist";
import Navbar from "@/components/Nav/Navbar.tsx";

export default function Home() {
  return (
    <main>
        <Navbar />
      <ShowArticlelist />
    </main>
  );
}
