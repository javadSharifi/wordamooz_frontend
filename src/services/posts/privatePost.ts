import { searchContext } from 'context/SearchContext';
import { IData, IPosts } from 'interfaces';
import axios from 'libs/axios';
import { useContext } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useParams } from 'react-router-dom';

type TData = {
  id: string | undefined;
  params?: object;
};

async function privatePots(data: TData) {
  const { id, params } = data;
  const resp = await axios.get<IData<IPosts[]>>(`api/categories/${id}/posts`, {
    params,
  });
  return resp.data;
}

function usePrivatePots() {
  const { idCategory: id } = useParams();
  const { searchDebounced } = useContext(searchContext);
  return useInfiniteQuery(
    [`posts_${id}`, searchDebounced],
    (query) =>
      privatePots({
        id,
        params: { query: searchDebounced, cursor: query.pageParam },
      }),
    {
      getNextPageParam: (lastPage) => lastPage.meta.next_cursor,
    }
  );
}

export default usePrivatePots;
