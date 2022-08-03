import React, { createContext, useEffect, useMemo, useState } from 'react';

export const fontSizeContext = createContext<any>(null);

function FontSizeContext({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState<string | undefined | null>(
    localStorage.getItem('fontSize')
  );

  (function checkFont() {
    if (!font) {
      console.log('ok');
      setFont('lg');
      localStorage.setItem('fontSize', `lg`);
    }
  })();

  const toggleTextSize = (e: number) => {
    switch (e) {
      case 0:
        setFont((prevCount) => 'base');
        break;
      case 50:
        setFont((prevCount) => 'lg');
        break;
      case 100:
        setFont((prevCount) => 'xl');
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem('fontSize', `${font}`);
  }, [font]);

  return (
    <fontSizeContext.Provider value={{ toggleTextSize, font }}>
      {children}
    </fontSizeContext.Provider>
  );
}

export default FontSizeContext;
