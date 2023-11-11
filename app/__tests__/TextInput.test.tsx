import React from 'react';
import TextInput from '../components/TextInput';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';

describe('TextInput', () => {
  const defaultProps = {
    type: 'text',
    name: 'testInput',
    label: 'Test Input',
    value: '',
    error: '',
    onChange: jest.fn(),
  };

  test('renders TextInput component with label', () => {
    const { getByLabelText } = render(<TextInput {...defaultProps} />);
    const inputElement = getByLabelText('Test Input');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange handler when the input value changes', () => {
    const { getByLabelText } = render(<TextInput {...defaultProps} />);
    const inputElement = getByLabelText('Test Input');

    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(defaultProps.onChange).toHaveBeenCalledWith('new value');
  });

  test('displays error message when error prop is provided', () => {
    const { getByText } = render(<TextInput {...defaultProps} error="Test error" />);
    const errorElement = getByText('Test error');
    expect(errorElement).toBeInTheDocument();
  });

  test('does not display error message when error prop is not provided', () => {
    const { queryByText } = render(<TextInput {...defaultProps} />);
    const errorElement = queryByText('Test error');
    expect(errorElement).toBeNull();
  });
});
