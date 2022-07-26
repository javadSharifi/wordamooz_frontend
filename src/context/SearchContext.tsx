import useDebounce from 'hooks/useDebounce';
import { createContext } from 'react';

type TSearchContext = {
  search: string;
  searchDebounced: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const searchContext = createContext<TSearchContext>({
  search: '',
  searchDebounced: '',
  setSearch: () => {},
});

function SearchContext({ children }: { children: React.ReactNode }) {
  const [search, searchDebounced, setSearch] = useDebounce('');

  return (
    <searchContext.Provider value={{ search, setSearch, searchDebounced }}>
      {children}
    </searchContext.Provider>
  );
}

export default SearchContext;
