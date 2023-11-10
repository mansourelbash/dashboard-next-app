import React, { ChangeEvent } from 'react';

interface TextInputProps {
  type: string;
  name: string;
  label: string;
  pattern?: string;
  value: string | undefined;
  error: any;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ type, name, label, pattern, value, onChange, error }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        htmlFor={`floating_${name}`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={`floating_${name}`}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder=""
        pattern={pattern}
        value={value}
        onChange={handleChange}
      />
      <span>{error && <p className="text-red-600">{error}</p>}</span>
    </div>
  );
};

export default TextInput;
