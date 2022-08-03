import { themeContext } from 'context/ThemeContext';
import React, { useContext, useState } from 'react';

const DarkMod = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  const [isSubscribed, setIsSubscribed] = useState(
    theme === 'light' ? true : false
  );
  return (
    <input
      type="checkbox"
      className="toggle toggle-primary"
      checked={isSubscribed}
      onChange={() => setIsSubscribed(!isSubscribed)}
      onClick={() => toggleTheme()}
      id="subscribe"
      name="subscribe"
    />
  );
};

export default DarkMod;
