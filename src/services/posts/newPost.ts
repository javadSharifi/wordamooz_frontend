import { useMutation } from 'react-query';
import axios from 'libs/axios';
import { IData, IPosts } from 'interfaces';

interface IPost {
  word: string;
  category_id: any;
  meaning: string;
  body: string;
}

async function newPost(data: IPost) {
  const Result = await axios.post<IData<IPosts>>(
    `api/categories/${data.category_id}/posts`,
    data
  );
  return Result;
}

const useNewPost = () => useMutation(newPost);

export default useNewPost;
