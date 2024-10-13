import React, { useState } from 'react';
import { Article } from './Article';

interface DateFilterProps {
    articles: Article[];
    setFilteredArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const DateFilter: React.FC<DateFilterProps> = ({ articles, setFilteredArticles }) => {
import { Article } from './Article'; // Updated to import Article instead of Book

interface DateFilterProps {
    articles: Article[]; // Changed from Book[] to Article[]
    setFilteredArticles: React.Dispatch<React.SetStateAction<Article[]>>; // Updated state type
}

const DateFilter: React.FC<DateFilterProps> = ({ articles, setFilteredArticles }) => {
    const [year, setYear] = useState<string>('');

    const handleFilterChange = () => {
        const filtered = articles.filter(article => {
            // Ensure published_date is defined and in the correct format
            if (!article.published_date) {
                return false; // Exclude articles with undefined published_date
            }

            const publishedDate = new Date(article.published_date);
            const publishedYear = publishedDate.getFullYear();

            console.log(`Article: ${article.title}, Published Year: ${publishedYear}, Filter Year: ${year}`); // Log the values

            // Check if the published year matches the selected year
            return year ? publishedYear === parseInt(year) : true;
        });

        console.log(`Filtered Articles: `, filtered); // Log filtered articles
        setFilteredArticles(filtered);
    };

    return (
        <div className='date-filter'>
            <div className='flex space-x-4'>
                <p style={{ color: 'white' }}>Published Year</p>
                <input
                    type="number"
                    placeholder="YYYY"
                    value={year}
                    onChange={e => {
                        setYear(e.target.value);
                        handleFilterChange(); // Update the filter on change
                    }}
                    className="p-2 border rounded w-24"
                />
            </div>
        </div>
    );
};

export default DateFilter;
/*
const DateFilter: React.FC<DateFilterProps> = ({ books, setFilteredBooks }) => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleFilterChange = () => {
        const filtered = articles.filter(article => {
            const publicationYear = article.publication_year instanceof Date
                ? article.publication_year
                : new Date();

            // Check if the publication year is within the selected range
            const isAfterStartDate = startDate ? publicationYear >= new Date(startDate) : true;
            const isBeforeEndDate = endDate ? publicationYear <= new Date(endDate) : true;
        const filtered = books.filter(book => {
            const publishedDate = book.published_date instanceof Date 
                ? book.published_date 
                : new Date();

            // Check if the published date is within the selected range
            const isAfterStartDate = startDate ? publishedDate >= new Date(startDate) : true;
            const isBeforeEndDate = endDate ? publishedDate <= new Date(endDate) : true;

            return isAfterStartDate && isBeforeEndDate;
        });

        setFilteredArticles(filtered);
        setFilteredBooks(filtered);
    };

    return (
        <div className='date-filter'>
            <div className='flex space-x-4'>
                <p style={{ color: 'white' }}>From</p>
                <input
                    type="date"
                    value={startDate}
                    onChange={e => {
                        setStartDate(e.target.value);
                        handleFilterChange(); // Update the filter on change
                    }}
                    className="p-2 border rounded"
                />
                <p style={{ color: 'white' }}>To</p>
                <input
                    type="date"
                    value={endDate}
                    onChange={e => {
                        setEndDate(e.target.value);
                        handleFilterChange(); // Update the filter on change
                    }}
                    className="p-2 border rounded"
                />
            </div>
        </div>
    );
};

export default DateFilter;
*/
