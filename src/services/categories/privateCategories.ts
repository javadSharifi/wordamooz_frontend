import { authContext } from 'context/AuthContext';
import { searchContext } from 'context/SearchContext';
import { IData, ICategory } from 'interfaces';
import axios from 'libs/axios';
import { useContext } from 'react';
import { useInfiniteQuery } from 'react-query';

type TData = {
  id: number | string;
  params?: object;
};

async function PrivateCategory(data: TData) {
  const { id, params, } = data;

  const result = await axios.get<IData<ICategory[]>>(
    `api/users/${id}/categories`,
    { params  }
  );
  return result;
}

function usePrivateCategories() {
  const [auth] = useContext(authContext);
  const { searchDebounced } = useContext(searchContext);

  return useInfiniteQuery(
    [`privateCategories_${auth.id}`, searchDebounced],
    (query) =>
      PrivateCategory({
        id: auth.id,
        params: { query: searchDebounced, cursor: query.pageParam },
      }),
    {
      getNextPageParam: (lastPage) => lastPage.data.meta.next_cursor,
    }
  );
}

export default usePrivateCategories;
