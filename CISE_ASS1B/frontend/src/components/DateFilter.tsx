import React, { useState } from 'react';
import { Book } from './Book';

interface DateFilterProps{
    books: Book[];
    setFilteredBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}


const DateFilter: React.FC<DateFilterProps> = ({ books, setFilteredBooks }) => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleFilterChange = () => {
        const filtered = books.filter(book => {
            const publishedDate = book.published_date instanceof Date 
                ? book.published_date 
                : new Date();

            // Check if the published date is within the selected range
            const isAfterStartDate = startDate ? publishedDate >= new Date(startDate) : true;
            const isBeforeEndDate = endDate ? publishedDate <= new Date(endDate) : true;

            return isAfterStartDate && isBeforeEndDate;
        });

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