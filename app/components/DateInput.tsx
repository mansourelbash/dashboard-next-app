import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { DateRangePickerProps} from '../types/types'

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  newStartDate,
  newEndDate,
  required,
  errors,
  control
}) => {
  return (
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-6 group">
        <label htmlFor="floating_date_from" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Date From
        </label>
        <Controller
          name="startDate" 
          control={control} 
          defaultValue={newStartDate}
          rules={{ required: required }} 
          render={({ field }) => (
            <DatePicker
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              selected={field.value}
              onChange={(date: Date) => field.onChange(date)}
              selectsStart
              startDate={field.value}
              endDate={newEndDate}
              dateFormat="yyyy-MM-dd"
              showIcon
            />
          )}
        />
        {errors.startDate && <p className="text-red-600">Date From is required</p>}
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label htmlFor="floating_date_to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Date To
        </label>
        <Controller
          name="endDate"
          control={control}
          defaultValue={newEndDate}
          rules={{ required: required }}
          render={({ field }) => (
            <DatePicker
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              selected={field.value}
              onChange={(date: Date) => field.onChange(date)}
              selectsEnd
              startDate={newStartDate}
              endDate={field.value}
              minDate={newStartDate}
              required={required}
              dateFormat="yyyy-MM-dd"
              showIcon
            />
          )}
        />
        {errors.endDate && <p className="text-red-600">Date To is required</p>}
      </div>
    </div>
  );
};

export default DateRangePicker;
