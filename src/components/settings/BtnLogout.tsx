import React from 'react';
import useLogout from 'services/auth/logout';

function BtnLogout() {
  const { mutate: logout } = useLogout();
  return (
    <div className='w-full center '>
      <button
        onClick={() => logout()}
        className="btn btn-outline mt-8  border-red-400 px-20 text-red-400 hover:bg-red-400  hover:text-white  "
      >
        <h3>logout</h3>
      </button>
    </div>
  );
}

export default BtnLogout;
