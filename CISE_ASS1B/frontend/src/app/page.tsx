'use client'
import { useState, useEffect } from 'react';
import ShowArticleList from "@/components/ShowArticleList";
import { Article } from "@/components/Article";
import SignIn from "@/./components/SignIn";
//import Navbar from "@/components/Nav/NavBar.tsx";

export default function Signin() {

  return (
    <main>
      <SignIn/>
    </main>
  );
}