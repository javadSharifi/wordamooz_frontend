import Modal from 'components/Modal';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import usePrivatePots from 'services/posts/privatePost';
import ModalCreate from 'components/ModalCreate';
import CreatePost from 'components/post/Create';
import CardPost from 'components/post/card';
import useInfiniteScroll from 'hooks/useInfiniteScroll';


function Post() {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    usePrivatePots();

  useInfiniteScroll(hasNextPage, fetchNextPage);
  const { idCategory: id } = useParams();

  const result = isLoading ? (
    
    <p> loading... </p>
  ) : (
    data?.pages.map((page, i) => (
      <Fragment key={i}>
        {page.data.map(({ id, body, category_id, meaning, word }) => (
          <CardPost
            key={id}
            body={body}
            categoryId={category_id}
            id={id}
            meaning={meaning}
            word={word}
          />
        ))}
      </Fragment>
    ))
  );

  return (
    <>
      <Modal name="Post">
        <ModalCreate>
          <CreatePost id={id} />
        </ModalCreate>
      </Modal>
      {result}
      {isFetchingNextPage && <div>Loading...</div>}
    </>
  );
}

export default Post;
