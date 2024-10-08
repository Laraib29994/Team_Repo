import React, { useState } from 'react';
import { Article } from './Article';

interface SearchBarProps {
    articles: Article[];
    setFilteredArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ articles, setFilteredArticles }) => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value.toLowerCase();
        setQuery(keyword);

        const filtered = articles.filter((article) => 
            article.title?.toLowerCase().includes(keyword)
        );
        setFilteredArticles(filtered);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search by title..."
                style={{ padding: '10px', width: '100%', borderRadius: '5px' }}
            />
        </div>
    );
};

export default SearchBar;
