import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateRangePicker from '../components/DateInput';
import { useForm, FormProvider } from 'react-hook-form';
import React from 'react'
jest.mock('react-datepicker', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('DateRangePicker', () => {
  it('displays error message when Date To is not provided', async () => {
    const methods = useForm();
    
    render(
      <FormProvider {...methods}>
        <DateRangePicker newStartDate={new Date()} newEndDate={new Date()} required={true} errors={{}} control={methods.control} />
      </FormProvider>
    );

    fireEvent.change(screen.getByLabelText('Date To'), { target: { value: '' } });

    expect(screen.getByText('Date To is required')).toBeInTheDocument();
  });
  
});
