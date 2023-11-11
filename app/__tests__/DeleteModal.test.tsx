// Your test file
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteModal from '../components/DeleteModal';
import { useMemberContext } from '../context/MemberContext';
import React from 'react';
// Mock the module
jest.mock('../context/MemberContext');

describe('DeleteModal', () => {
  it('calls deleteMember when "Yes, I\'m sure" button is clicked', () => {
    // Mock the deleteMember function
    const deleteMemberMock = jest.fn();
    useMemberContext.mockReturnValue({ deleteMember: deleteMemberMock });

    // Render the DeleteModal
    render(<DeleteModal isModalOpen={true} closeModal={() => {}} rowID="1" />);

    // Click the "Yes, I'm sure" button
    fireEvent.click(screen.getByText("Yes, I'm sure"));

    // Expect deleteMember to be called with the correct arguments
    expect(deleteMemberMock).toHaveBeenCalledWith("1");
  });

  it('closes the modal when "No, cancel" button is clicked', () => {
    // Mock the context
    useMemberContext.mockReturnValue({});

    // Render the DeleteModal
    render(<DeleteModal isModalOpen={true} closeModal={() => {}} rowID="1" />);

    // Click the "No, cancel" button
    fireEvent.click(screen.getByText("No, cancel"));

    // Expect closeModal to be called
    // Add your expectations here based on your implementation
  });
});
