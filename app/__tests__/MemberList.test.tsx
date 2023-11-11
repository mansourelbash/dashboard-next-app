import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM matchers
import MemberList from '../components/MemberList';

const membersListMock = [
  {
    id: '1',
    title: 'Mr',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    startDate: '2023-01-01', // Provide a sample value
    endDate: '2023-12-31', 
  },
  // Add more mock data as needed
];

test('renders MemberList with provided membersList', () => {
  render(<MemberList membersList={membersListMock} />);

  // Check if MemberTable is rendered with the provided membersList
  const memberTable = screen.getByTestId('member-table');
  expect(memberTable).toBeInTheDocument();
});

// Add more test cases as needed
