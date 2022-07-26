import React from 'react';

function ButtonInfo({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={`${className} shadow-btn btn btn-info mt-2   text-white `}
    >
      {children}
    </button>
  );
}

export default ButtonInfo;
