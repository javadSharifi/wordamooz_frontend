import { OpenModal } from 'components/Modal';
import React from 'react';
import { useParams } from 'react-router-dom';
import Search from 'components/nav/Search';
import Avatar from './Theme';
import { PlusCircleIcon } from '@heroicons/react/outline';

function Nav() {
  let params = useParams();
  const title = !params.idCategory ? 'Category' : 'Post';
  return (
    <div
      data-aos="fade-down"
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-duration="1000"
      className="  sticky  top-0 z-50 mt-4  flex h-14 w-full rounded-xl   bg-slate-100 shadow-lg shadow-gray-300/50 dark:bg-American-Blue dark:shadow-none  "
    >
      <div className="ml-10 w-1/3 self-center text-2xl font-bold dark:text-white ">{title}</div>
      <div className="mx-3 my-[0.4rem] flex w-2/3 flex-row-reverse flex-wrap items-center  gap-4 ">
        <Avatar />
        <OpenModal
          className=" bg-gradient-info center hidden  lg:flex  h-full  gap-1 rounded-xl border-gray-600 px-5 shadow-md hover:border-none hover:text-white  dark:border-2 dark:bg-transparent dark:text-gray-300 "
          name={title}
        >
          <PlusCircleIcon className="h-full w-6 " />
          create
        </OpenModal>
        <Search className="h-full w-48 rounded-lg bg-slate-300/60 shadow-sm" />
      </div>
    </div>
  );
}

export default Nav;
