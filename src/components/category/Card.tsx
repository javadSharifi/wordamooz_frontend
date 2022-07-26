import React from 'react';
import { Link } from 'react-router-dom';
import Action from './Action';

function CardCategory({ id, text }: { id: number; text: string }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" h-72  w-full  overflow-hidden  "
    >
      <Action categoryId={id} />
      <Link
        className="card flex h-full w-full flex-col  gap-2   dark:bg-Shark dark:text-white dark:shadow-none  "
        to={`/Categories/${id}`}
      >
        <img
          className="  relative aspect-square h-4/5 w-full rounded-3xl object-cover p-2 dark:shadow-none "
          src={`https://picsum.photos/id/${id}/400/200`}
          alt="img"
        />

        <h1 className="center text-lg font-bold ">{text}</h1>
      </Link>
    </div>
  );
}

export default CardCategory;
