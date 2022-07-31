import React, { useContext } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

import { searchContext } from 'context/SearchContext';

function Search({ className }: { className?: string }) {
  const { search, setSearch } = useContext(searchContext);

  return (
    <div
      className={`${className}  center  rounded-2xl border-gray-500  dark:border-2 dark:bg-transparent `}
    >
      <SearchIcon className="onClick h-full w-7  cursor-pointer object-cover py-1 text-gray-400 dark:text-white" />
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" h-full w-36 bg-transparent pl-3 font-bold outline-none focus:border-none dark:text-white "
        placeholder="search..."
      />
    </div>
  );
}

export default Search;
