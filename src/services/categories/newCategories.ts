import { useMutation } from 'react-query';
import axios from 'libs/axios';
import { ICategory, IData } from 'interfaces';

interface ICategories {
  name: string;
  is_public: boolean;
}

async function categories(data: ICategories) {
  const result = await axios.post<IData<ICategory>>('api/categories', data);
  return result;
}

const useCategories = () => useMutation(categories);

export default useCategories;
