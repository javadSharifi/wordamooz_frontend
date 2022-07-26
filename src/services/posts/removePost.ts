import { useMutation } from 'react-query';
import axios from 'libs/axios';

interface IPostRemove {
  categoryId: string | number;
  postId: string | number;
}

async function removePost(data: IPostRemove) {
  const Result = await axios.delete(
    `api/categories/${data.categoryId}/posts/${data.postId}`
  );
  return Result;
}

const useRemovePost = () => useMutation(removePost);

export default useRemovePost;
