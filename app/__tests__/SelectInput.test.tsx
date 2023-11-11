import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectDropdown from '../components/SelectInput';

const mockOptions = ['Option 1', 'Option 2', 'Option 3'];

describe('SelectDropdown', () => {
  test('renders without errors', () => {
    render(
      <SelectDropdown
        id="test-select"
        label="Test Label"
        options={mockOptions}
        value="Option 1"
        onChange={() => {}}
        error=""
      />
    );

    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  test('handles user selection', () => {
    const onChangeMock = jest.fn();
    render(
      <SelectDropdown
        id="test-select"
        label="Test Label"
        options={mockOptions}
        value="Option 1"
        onChange={onChangeMock}
        error=""
      />
    );

    const selectElement = screen.getByLabelText('Test Label');

    fireEvent.change(selectElement, { target: { value: 'Option 2' } });

    expect(onChangeMock).toHaveBeenCalledWith('Option 2');
  });

  test('displays error message when error is provided', () => {
    render(
      <SelectDropdown
        id="test-select"
        label="Test Label"
        options={mockOptions}
        value="Option 1"
        onChange={() => {}}
        error="This is an error"
      />
    );

    expect(screen.getByText('This is an error')).toBeInTheDocument();
  });

  test('does not display error message when error is not provided', () => {
    render(
      <SelectDropdown
        id="test-select"
        label="Test Label"
        options={mockOptions}
        value="Option 1"
        onChange={() => {}}
        error=""
      />
    );

    expect(screen.queryByText('This is an error')).toBeNull();
  });
});
