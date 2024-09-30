'use client'

import ShowQueue from "@/components/ShowQueue";
import Navbar from "@/components/Nav/Navbar.tsx";

export default function Home() {
  return (
    <main>
        <Navbar />
      <ShowQueue />
    </main>
  );
}
