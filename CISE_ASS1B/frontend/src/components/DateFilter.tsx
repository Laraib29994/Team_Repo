import React, { useState } from 'react';
import { Article } from './Article';

interface DateFilterProps {
    articles: Article[];
    setFilteredArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const DateFilter: React.FC<DateFilterProps> = ({ articles, setFilteredArticles }) => {
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

            return isAfterStartDate && isBeforeEndDate;
        });

        setFilteredArticles(filtered);
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
