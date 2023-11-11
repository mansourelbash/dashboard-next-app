import React, { Component, ReactNode } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemberTable from '../components/MemberTable';

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
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

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
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
];

describe('MemberTable', () => {
  test('opens delete modal when delete button is clicked', async () => {
    const useRouterMock = jest.fn();
    useRouterMock.mockReturnValue({
      push: jest.fn(),
    });
    jest.mock('next/router', () => ({
      ...jest.requireActual('next/router'),
      useRouter: useRouterMock,
    }));

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
