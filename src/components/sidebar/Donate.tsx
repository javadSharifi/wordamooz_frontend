import React from 'react';
import Idonate from 'assets/img/donate.png';

function Donate() {
  return (
    <a
      href="https://mahak-charity.org/online-payment/"
      target="_blank"
      rel="noopener noreferrer"
      className="center  absolute bottom-10   left-2   w-[95%] cursor-pointer border-0 bg-inherit hover:bg-inherit"
    >
      <img
        src={Idonate}
        className="w-[90%] rounded-xl  object-cover  shadow-lg"
        alt="donate"
      />
    </a>
  );
}

export default Donate;
