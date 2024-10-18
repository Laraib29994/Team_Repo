'use client'

import AnalystHome from "@/components/Analyst/AnalystHome";
import NavBar from "@/./components/Analyst/NavBarAnalyst";

export default function Analyst_Home() {
  return (
  <div>
    <NavBar title="SPEED" subtitle="Software Practice Empiracal Evidence Database" initialPage="Articles-Analyst" />
    <AnalystHome/>
  </div>
  )
}
