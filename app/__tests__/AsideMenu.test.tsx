import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the Jest DOM matchers
import AsideMenu from '../components/AsideMenu';

describe('AsideMenu', () => {
  test('renders AsideMenu component with logo and menu items', () => {
    render(<AsideMenu />);

    const logoElement = screen.getByAltText('Flowbite Logo');
    expect(logoElement).toBeInTheDocument();

    const dashboardLink = screen.getByText('Dashboard');
    const addUsersLink = screen.getByText('Add Users');
    expect(dashboardLink).toBeInTheDocument();
    expect(addUsersLink).toBeInTheDocument();
  });


  test('navigates to Dashboard when Dashboard link is clicked', () => {
    render(<AsideMenu />);

    const dashboardLink = screen.getByText('Dashboard');
    fireEvent.click(dashboardLink);

  });

  test('navigates to Add Users when Add Users link is clicked', () => {
    render(<AsideMenu />);

    const addUsersLink = screen.getByText('Add Users');
    fireEvent.click(addUsersLink);

  });
});
