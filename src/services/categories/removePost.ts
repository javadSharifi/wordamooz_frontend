import { useMutation } from 'react-query';
import axios from 'libs/axios';

interface ICategoriesRemove {
  categoryId: string | number;
}

async function removeCategories(data: ICategoriesRemove) {
  const Result = await axios.delete(`api/categories/${data.categoryId}`);
  return Result;
}

const useRemoveCategories = () => useMutation(removeCategories);

export default useRemoveCategories;
