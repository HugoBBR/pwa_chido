import { createContext, useState } from 'react';

import { SearchContextType } from '@/interfaces/contextInterfaces';

export const SearchContext = createContext<SearchContextType>({
  search: 'UWU',
  updateSearch: () => {},
});

export const SearchProvider = ({ children }: any) => {
  const [search, setSearch] = useState('');

  const updateSearch = (searchValue: string) => {
    setSearch(searchValue);
  };

  return (
    <SearchContext.Provider value={{ search, updateSearch }}>{children}</SearchContext.Provider>
  );
};
