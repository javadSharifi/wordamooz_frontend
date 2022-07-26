import { CogIcon, HomeIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { OpenModal } from 'components/Modal';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BtnNavigation from './BtnNavigation';

function Navigation() {
  const navigate = useNavigate();
  let params = useParams();
  const title = !params.idCategory ? 'Category' : 'Post';

  return (
    <div className="center fixed  bottom-0 z-50 h-16 w-full  sm:hidden">
      <div className=" mx-2 h-full w-full rounded-t-3xl border-t-4 border-gray-300/30 bg-gray-100 dark:border-transparent dark:bg-[#1b202d]">
        <div className="mt-2 flex flex-wrap justify-center gap-20 ">
          <BtnNavigation Icon={HomeIcon} onClick={() => navigate('/')} />
          <OpenModal className="BtnNavigation" name={title}>
            <PlusCircleIcon className="text-gray-400" />
          </OpenModal>
          <BtnNavigation Icon={CogIcon} />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
