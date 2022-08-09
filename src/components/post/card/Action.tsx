import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import useRemovePost from 'services/posts/removePost';
import BtnDropdown from 'shared/dropdown/BtnDropdown';
import Dropdown from 'shared/dropdown';

function Action({
  postId,
  categoryId,
}: {
  postId: number;
  categoryId: number;
}) {
  const queryClient = useQueryClient();

  const { mutate } = useRemovePost();

  const removePost = () => {
    toast.loading('removing...', {
      duration: 1000,
    });
    mutate(
      { categoryId, postId },
      {
        onSuccess() {
          toast.success('remove is success');
          queryClient.invalidateQueries([`posts_${categoryId}`]);
        },
        onError(e: any) {
          toast.error(e.response.data.errors);
        },
      }
    );
  };
  return (
    <Dropdown>
      <BtnDropdown onClick={() => removePost()}>
        <TrashIcon className="h-7 w-8 " />
        <p className="self-center  font-bold ">remove</p>
      </BtnDropdown>
    </Dropdown>
  );
}

export default Action;
