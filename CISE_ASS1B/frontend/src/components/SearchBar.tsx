
import React, { useState, useEffect } from 'react';
import { Book } from './Book';

interface SearchBarProps {
    books: Book[];
    setFilteredBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ books, setFilteredBooks }) => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const keyword = e.target.value.toLowerCase();
        setQuery(keyword);

        const filtered = books.filter((book) => 
            book.title?.toLowerCase().includes(keyword)
        );
        setFilteredBooks(filtered);
    };

    return(
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search by title..."
                style={{ padding: '10px', width: '100%', borderRadius: '5px'}}
            />
        </div>
    );
};

export default SearchBar