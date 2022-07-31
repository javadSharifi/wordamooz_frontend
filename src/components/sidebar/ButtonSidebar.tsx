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
      className="buttonSidebar  text-gray-500 font-semibold"
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
