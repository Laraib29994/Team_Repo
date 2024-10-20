import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Article } from './Article';

// Sample articles for testing
const articles: Article[] = [
  { _id: "1", title: 'React Testing' },
  { _id: "2", title: 'Jest and Testing Library' },
  { _id: "3", title: 'Advanced React Patterns' },
];

describe('SearchBar Component', () => {
  test('renders input field correctly', () => {
    const setFilteredArticles = jest.fn();
    render(<SearchBar articles={articles} setFilteredArticles={setFilteredArticles} />);

    const input = screen.getByPlaceholderText('Search by title...');
    expect(input).toBeInTheDocument();
  });

  test('filters articles based on search query', () => {
    const setFilteredArticles = jest.fn();
    render(<SearchBar articles={articles} setFilteredArticles={setFilteredArticles} />);

    const input = screen.getByPlaceholderText('Search by title...');
    fireEvent.change(input, { target: { value: 'react' } });

    expect(setFilteredArticles).toHaveBeenCalledWith([
      { _id: "1", title: 'React Testing' },
      { _id: "3", title: 'Advanced React Patterns' },
    ]);
  });

  test('resets articles when search query is cleared', () => {
    const setFilteredArticles = jest.fn();
    render(<SearchBar articles={articles} setFilteredArticles={setFilteredArticles} />);

    const input = screen.getByPlaceholderText('Search by title...');
    fireEvent.change(input, { target: { value: 'react' } });

    // Simulate clearing the search query
    fireEvent.change(input, { target: { value: '' } });

    expect(setFilteredArticles).toHaveBeenCalledWith(articles); // Original articles should be reset
  });

  test('displays message when no matching articles are found', () => {
    const setFilteredArticles = jest.fn();
    render(<SearchBar articles={[]} setFilteredArticles={setFilteredArticles} />);

    const input = screen.getByPlaceholderText('Search by title...');
    fireEvent.change(input, { target: { value: 'nonexistent' } });

    expect(screen.getByText('No matching articles found!')).toBeInTheDocument();
  });

  test('does not display "No matching articles found!" when articles match the query', () => {
    const setFilteredArticles = jest.fn();
    render(<SearchBar articles={articles} setFilteredArticles={setFilteredArticles} />);

    const input = screen.getByPlaceholderText('Search by title...');
    fireEvent.change(input, { target: { value: 'react' } });

    expect(screen.queryByText('No matching articles found!')).not.toBeInTheDocument();
  });
});
