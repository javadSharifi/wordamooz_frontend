import React from 'react';
import useGoogle from 'services/auth/google';
import IGoogle from 'assets/svg/google.svg';

function BtnGoogle() {
  return (
    <button
      type="button"
      className="center onClick rounded-xl border-2 border-gray-300 p-2 text-lg  font-semibold"
      onClick={useGoogle}
    >
      <img className="w-7" src={IGoogle} alt="img google" />
      <h1> Login For Google</h1>
    </button>
  );
}

export default BtnGoogle;
