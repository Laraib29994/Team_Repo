import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCard';
import { Article } from './Article';
import DateFilter from './DateFilter';

interface ShowArticleListProps {
  articles: Article[];
}

const ShowArticleList: React.FC<ShowArticleListProps> = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  const [query, setQuery] = useState<string>(''); // Added query state

  useEffect(() => {
    setFilteredArticles(articles); // Initialize with all articles
  }, [articles]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value.toLowerCase();
    setQuery(keyword);

    const filtered = articles.filter((article) =>
      article.title?.toLowerCase().includes(keyword)
    );
    setFilteredArticles(filtered);
  };

  const articleList =
    filteredArticles.length === 0
      ? 'There are no article records!'
      : filteredArticles.map((article, k) => <ArticleCard article={article} key={k} />);

  return (
    <div className='ShowArticleList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Article List</h2>
          </div>

          <div className='col-md-11'>
            <Link href='/create-article' className='btn btn-outline-warning float-right'>
              + Add New Article
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='SearchBar'>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search by title..."
            style={{ padding: '10px', width: '100%', borderRadius: '5px' }}
          />
        </div>

        {/* Add DateFilter component */}
        <div className="date-filter">
          <DateFilter articles={articles} setFilteredArticles={setFilteredArticles} />
        </div>

        <div className='list'>{articleList}</div>
      </div>
    </div>
  );
};

export default ShowArticleList;





/*
const ShowBookList: React.FC<ShowBookListProps> = ({ books }) => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  const bookList = books.length === 0
    ? 'There is no book record!'
    : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link href='/create-book' className='btn btn-outline-warning float-right'>
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='SearchBar'>
          <SearchBar books={books} setFilteredBooks={setFilteredBooks}/>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
};

export default ShowBookList;

/*
function ShowBookList() {
  const [books, setBooks] = useState<[Book?]>([]);

  useEffect(() => {
    fetch('http://localhost:8082/api/books')
      .then((res) => {
        return res.json();
      })
      .then((books) => {
        setBooks(books);
      })
      .catch((err) => {
        console.log('Error from ShowBookList: ' + err);
      });
  }, []);

  const bookList =
    books.length === 0
      ? 'there is no book record!'
      : books.map((book, k) => <BookCard book={book} key={k} />);                                                                           

      return (
        <div className='ShowBookList'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <br />
                <h2 className='display-4 text-center'>Books List</h2>
              </div>
    
              <div className='col-md-11'>
                <Link
                  href='/create-book'
                  className='btn btn-outline-warning float-right'
                >
                  + Add New Book
                </Link>
                <br />
                <br />
                <hr />
              </div>
            </div>
    
            <div className='list'>{bookList}</div>
          </div>
        </div>
      );
    }
    
    export default ShowBookList;
  */