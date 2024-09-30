'use client'

import { useState, useEffect} from 'react';
import ShowBookList from "@/components/ShowBookList";
import { Book } from "@/components/Book";



export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/books')
    .then((res) => res.json())
    .then((data) => {
      setBooks(data);
      setFilteredBooks(data);
    })
    .catch((err) => {
      console.log('Error fetching books: ' + err);
    });

  }, []);

  
  return (
    <main>
      <ShowBookList books={filteredBooks} />      
    </main>
  );
}
