import React, { memo } from 'react';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <main className="` mb-12 mt-3  grid min-h-[86.5vh]  w-full gap-6 rounded-xl bg-slate-100 p-6 shadow-sm dark:bg-American-Blue lg:mb-4  sm:grid-cols-2 xl:grid-cols-3  ">
      {children}
    </main>
  );
}

export default memo(Main);
