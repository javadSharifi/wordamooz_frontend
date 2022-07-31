import React from 'react';
import { Outlet } from 'react-router-dom';
import Image from 'components/auth/Image';
import iLogin from 'assets/img/iLogin.jpg';

function Auth() {
  return (
    <div className="center   h-screen  bg-slate-200 ">
      <div className="h-[98%]  w-[90%] flex-col  rounded-xl border-4 border-white/20 bg-[#f3f4f975]    shadow-lg shadow-slate-300/40 sm:w-[70%] md:grid  md:h-[80%]   md:w-[90%]  md:grid-cols-2 lg:h-[88%] ">
        <Image alt="img login" src={iLogin} />
        <div className="relative  h-full  w-full   flex-col  items-center  overflow-y-auto overflow-x-hidden md:h-[90%] md:justify-center md:self-center    ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Auth;
