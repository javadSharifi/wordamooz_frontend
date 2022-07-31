import Modal from 'components/Modal';
import usePrivateCategories from 'services/categories/privateCategories';
import ModalCreate from 'components/ModalCreate';
import Create from 'components/category/Create';
import CardCategory from 'components/category/Card';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { Fragment } from 'react';
import CartLoading from 'components/CartLoading';

function Category() {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    usePrivateCategories();
  useInfiniteScroll(hasNextPage, fetchNextPage);

  const result = isLoading ? (
    <CartLoading />
  ) : (
    data?.pages.map((page, i) => (
      <Fragment key={i}>
        {page.data.data.map(({ id, name }) => (
          <CardCategory key={id} id={id} text={name} />
        ))}
      </Fragment>
    ))
  );

  return (
    <>
      <Modal name="Category">
        <ModalCreate>
          <Create />
        </ModalCreate>
      </Modal>

      {result}
      {isFetchingNextPage && <CartLoading />}
    </>
  );
}

export default Category;
