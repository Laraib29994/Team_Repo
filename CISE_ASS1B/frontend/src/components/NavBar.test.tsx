// NavBar.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './User/NavBar';

describe('Navbar Component', () => {
  const title = 'SPEED';
  const subtitle = 'Your subtitle here';
  const initialPage = 'Home';

  beforeEach(() => {
    render(<Navbar title={title} subtitle={subtitle} initialPage={initialPage} />);
  });

  it('renders the title and subtitle correctly', () => {
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('renders the current page correctly', () => {
    expect(screen.getByText(initialPage)).toBeInTheDocument();
  });

  it('toggles dropdown menu when button is clicked', () => {
    const dropdownButton = screen.getByRole('button', { name: /toggle dropdown menu/i });
    fireEvent.click(dropdownButton);

    // Verify dropdown menu opens
    expect(screen.getByText('ARTICLES')).toBeInTheDocument();
    expect(screen.getByText('CREATE ARTICLES')).toBeInTheDocument();
    expect(screen.getByText('SIGN OUT')).toBeInTheDocument();

    // Click again to close the dropdown
    fireEvent.click(dropdownButton);

    // Verify dropdown menu closes
    expect(screen.queryByText('ARTICLES')).not.toBeInTheDocument();
  });

  it('navigates to the correct links', () => {
    // After opening the dropdown
    fireEvent.click(screen.getByRole('button', { name: /toggle dropdown menu/i }));

    const articlesLink = screen.getByText('ARTICLES');
    const createArticlesLink = screen.getByText('CREATE ARTICLES');
    const signOutLink = screen.getByText('SIGN OUT');

    expect(articlesLink).toBeInTheDocument();
    expect(createArticlesLink).toBeInTheDocument();
    expect(signOutLink).toBeInTheDocument();

  });
});
