import React from 'react';
import { render, screen } from '@testing-library/react';
import CardHeader from '../components/CardHeader';

const mockProps = {
  imageURL: 'path/to/image.jpg',
  title: 'Test Title',
  description: 'Test Description',
};
describe('CardHeader', () => {
  test('renders with provided props', () => {
    render(<CardHeader {...mockProps} />);

    const imageElement = screen.getByAltText('Users');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.imageURL);

    const titleElement = screen.getByText(mockProps.title);
    const descriptionElement = screen.getByText(mockProps.description);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

test('renders with empty title and description', () => {
  const props = {
    imageURL: '',
    title: '',
    description: '',
  };

  render(<CardHeader {...props} />);

  const titleElement = screen.getByText('');
  const descriptionElement = screen.getByText('');
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();

  const imageElement = screen.getByAltText('Users');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', '');
});


  test('renders with empty values for all props', () => {
    const props = {
      imageURL: '',
      title: '',
      description: '',
    };

    render(<CardHeader {...props} />);

    const titleElement = screen.getByText('');
    const descriptionElement = screen.getByText('');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('Users');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', '');
  });
});
