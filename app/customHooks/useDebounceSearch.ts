import { useState, useEffect } from 'react';

interface UseDebouncedSearchResult<T> {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  debouncedData: T;
}

type ArrayLikeOrObject<T> = T[] | Record<string, unknown>;

function useDebouncedSearch<T>(initialData: ArrayLikeOrObject<T>, delay: number): UseDebouncedSearchResult<ArrayLikeOrObject<T>> {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedData, setDebouncedData] = useState<ArrayLikeOrObject<T>>(initialData);

  useEffect(() => {
    const debounceId = setTimeout(() => {
      const filteredData = (initialData as T[]).filter((item) =>
        typeof item === 'object' && item !== null
          ? Object.values(item).some((value) =>
              String(value).toLowerCase().includes(searchTerm.toLowerCase())
            )
          : false
      );
      setDebouncedData(filteredData as ArrayLikeOrObject<T>);
    }, delay);

    return () => clearTimeout(debounceId);
  }, [searchTerm, initialData, delay]);

  return { searchTerm, setSearchTerm, debouncedData };
}

export default useDebouncedSearch;
