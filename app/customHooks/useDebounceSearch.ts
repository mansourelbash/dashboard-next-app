import { useState, useEffect } from 'react';

interface UseDebouncedSearchResult<T> {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  debouncedData: T[];
}

function useDebouncedSearch<T>(initialData: T[], delay: number): UseDebouncedSearchResult<T> {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedData, setDebouncedData] = useState<T[]>(initialData);

  useEffect(() => {
    const debounceId = setTimeout(() => {
      const filteredData = initialData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setDebouncedData(filteredData);
    }, delay);

    return () => clearTimeout(debounceId);
  }, [searchTerm, initialData, delay]);

  return { searchTerm, setSearchTerm, debouncedData };
}

export default useDebouncedSearch;
