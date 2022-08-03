import { fontSizeContext } from 'context/FontSizeContext';
import React, { useContext, useState } from 'react';

function FontSize() {
  const [value, setValues] = useState<number>(0);
  const { toggleTextSize } = useContext(fontSizeContext);


  return (
    <div>
      <input
        type="range"
        step={50}
        min={0}
        max={100}
        value={value}
        className="range range-primary dark:border dark:bg-slate-100/20"
        onChange={(e) => {
          setValues((prevCount) => e.target.valueAsNumber);

          toggleTextSize(e.target.valueAsNumber);
        }}
      />
      <div className="flex w-full justify-between   px-2 font-bold dark:text-white ">
        <span className="text-base">base</span>
        <span className="text-lg">lg</span>
        <span className="text-xl"> xl</span>
      </div>
    </div>
  );
}

export default FontSize;
