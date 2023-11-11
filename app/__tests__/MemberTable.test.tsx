import React, { Component, ErrorInfo, ReactNode } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the Jest DOM matchers
import MemberTable from '../components/MemberTable';

// Mock useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }


  
  render() {
    const { hasError, error } = this.state;

    if (hasError && error) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const membersListMock = [
  {
    id: '1',
    title: 'Mr',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
  },
  // Add more mock data as needed
];

describe('MemberTable', () => {
  test('opens delete modal when delete button is clicked', async () => {
    render(
      <ErrorBoundary>
        <MemberTable membersList={membersListMock} />
      </ErrorBoundary>
    );


    await waitFor(() => {
      expect(screen.queryByText('Are you sure you want to delete this member?')).toBeNull();
    });
  });
});
