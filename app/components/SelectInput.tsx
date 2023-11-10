import React from 'react';
import { SelectDropdownProps } from "../types/types";

const SelectDropdown: React.FC<SelectDropdownProps> = ({ id, label, options, value, onChange, error }) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span>{error && <p className="text-red-600">{error}</p>}</span>
    </div>
  );
};

export default SelectDropdown;
