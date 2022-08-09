import React from 'react';

export function OpenModal({
  name,
  className,
  children,
}: {
  name: string;
  className?: string;
  children: any;
}) {
  return (
    <label
      htmlFor={name}
      className={`onClick	   select-none rounded-md font-bold    ${className} `}
    >
      {children}
    </label>
  );
}

function Modal({ children, name }: { children: any; name: string }) {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <label className="modal bg-slate-400/30" htmlFor={name}>
            <label
      htmlFor=""
      className="flex min-h-[25rem] w-[25rem] flex-col items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-[#1E293B] lg:w-[30rem]"
        >
          
        {children}
    </label>
      </label>
    </>
  );
}

export default Modal;
