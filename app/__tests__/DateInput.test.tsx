import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, FormProvider } from 'react-hook-form';
import DateInput from '../components/DateInput';

describe('DateRangePicker', () => {
  test('renders without errors', () => {
    const methods = useForm();
    render(
      <FormProvider {...methods}>
        <DateInput
          newStartDate={null} // Provide a valid start date
          newEndDate={null}   // Provide a valid end date
          required={true}
          errors={{ startDate: '', endDate: '' }} // Provide mock errors if needed
          control={methods.control}
        />
      </FormProvider>
    );

    // Ensure the component renders without errors
    expect(screen.getByLabelText('Date From')).toBeInTheDocument();
    expect(screen.getByLabelText('Date To')).toBeInTheDocument();
  });

  test('displays error messages when dates are not provided', async () => {
    const methods = useForm();
    render(
      <FormProvider {...methods}>
        <DateInput
          newStartDate={null} // Provide a valid start date
          newEndDate={null}   // Provide a valid end date
          required={true}
          errors={{ startDate: 'Date From is required', endDate: 'Date To is required' }}
          control={methods.control}
        />
      </FormProvider>
    );

    // Check if error messages are displayed initially
    expect(screen.getByText('Date From is required')).toBeInTheDocument();
    expect(screen.getByText('Date To is required')).toBeInTheDocument();

    // Simulate user input (select valid dates)
    const startDateInput = screen.getByLabelText('Date From');
    const endDateInput = screen.getByLabelText('Date To');

    await act(async () => {
      fireEvent.change(startDateInput, { target: { value: '2023-01-01' } });
      fireEvent.change(endDateInput, { target: { value: '2023-01-10' } });
    });

    // Check if error messages are not displayed after providing valid dates
    expect(screen.queryByText('Date From is required')).toBeNull();
    expect(screen.queryByText('Date To is required')).toBeNull();
  });
});
