import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LiteLogo from 'assets/svg/logoBig.svg';
import DarkLogo from 'assets/svg/darkLogo.svg';
import { themeContext } from 'context/ThemeContext';

function Logo() {
  const { theme } = useContext(themeContext);

  return (
    <Link to="/">
      <div
        data-aos-once="true"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="center    w-full flex-col pt-14  "
      >
        <img
          src={theme === 'light' ? LiteLogo : DarkLogo}
          alt="logo"
          className="h-14 "
        />
        <h1 className="absolute translate-y-8 self-center text-xl  font-bold">
          Word Amoz
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
