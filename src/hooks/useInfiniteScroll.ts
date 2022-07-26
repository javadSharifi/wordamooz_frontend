/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

function useInfiniteScroll(
  hasNextPage: boolean | undefined,
  fetchNextPage: any
) {
  const [finishScroll, setFinishScroll] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e: any) => {
      if (
        e.target.documentElement.scrollTop + window.innerHeight + 600 >=
        e.target.documentElement.scrollHeight
      ) {
        !finishScroll && setFinishScroll(true);
      } else {
        finishScroll && setFinishScroll(false);
      }
    });
  }, [hasNextPage]);

  useEffect(() => {
    if (hasNextPage && finishScroll) {
      fetchNextPage();
    }
  }, [finishScroll]);
}

export default useInfiniteScroll;
