import React, { useState } from 'react';
import { Article } from '../Article';

interface SearchBarProps {
    articles: Article[];
    setFilteredArticles: React.Dispatch<React.SetStateAction<Article[]>>; // Updated state type
}

const SearchBar: React.FC<SearchBarProps> = ({ articles, setFilteredArticles }) => {
    const [query, setQuery] = useState<string>('');
    // **Start of Highlighted Change**
    const [isSearching, setIsSearching] = useState<boolean>(false); // State to track if searching
    // **End of Highlighted Change**

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value.toLowerCase();
        setQuery(keyword);

        // **Start of Highlighted Change**
        if (keyword === '') {
            // If the search query is empty, reset the articles
            setFilteredArticles(articles);
            setIsSearching(false); // Reset search state
        } else {
            // Filter articles based on the search query
            const filtered = articles.filter((article) =>
                article.title?.toLowerCase().includes(keyword)
            );
            setFilteredArticles(filtered);
            setIsSearching(true); // Set searching state to true
        }
        // **End of Highlighted Change**
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
            {/* **Start of Highlighted Change** */}
            {isSearching && query.length > 0 && articles.length === 0 && (
                <p>No matching articles found!</p> // Show message if no articles match
            )}
            {/* **End of Highlighted Change** */}
        </div>
    );
};

export default SearchBar;
