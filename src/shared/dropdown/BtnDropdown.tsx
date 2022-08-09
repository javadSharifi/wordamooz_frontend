import React from 'react';

function BtnDropdown({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: any;
}) {
  return (
    <button
      className="  hover:bg-gradient-info  flex w-full cursor-pointer flex-wrap 
        rounded-md border-2 dark:text-white border-gray-300/30 p-2 hover:border-white hover:text-white dark:bg-transparent "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BtnDropdown;
