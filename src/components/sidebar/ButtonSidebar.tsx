/* eslint-disable no-undef */
import { IButtonSidebar } from 'interfaces';
import React from 'react';

export default function ButtonSidebar({
  delay,
  Icon,
  name,
  onClick,
}: IButtonSidebar) {
  return (
    <button
      onClick={onClick}
      className=" onClick hover:bg-gradient-info  group flex w-10/12 cursor-pointer select-none flex-wrap gap-2  rounded-lg py-3  text-lg text-gray-500    transition-all duration-200 hover:pl-2 hover:font-bold hover:shadow-md dark:text-white     "
    >
      <Icon
        className=" ml-3 w-6     grayscale group-hover:text-white"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay={delay}
      />
      <h1
        className="group-hover:text-white"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay={delay}
      >
        {name}
      </h1>
    </button>
  );
}
