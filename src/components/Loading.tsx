import React from 'react';
import Logo from 'assets/svg/logoBig.svg';

function Loading() {
  return (
    <div className="center h-screen w-screen flex-col bg-slate-100 text-5xl font-bold text-[#00879D]">
      <img data-aos="zoom-in" className="w-[20%]" src={Logo} alt="logo" />
      <h1 data-aos="fade-up">Word Amooze</h1>
    </div>
  );
}

export default Loading;
