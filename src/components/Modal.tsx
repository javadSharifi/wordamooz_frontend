import React from 'react';

export function OpenModal({
  name,
  className,
  children,
}: {
  name: string;
  className: string;
  children: any;
}) {
  return (
    <label
      htmlFor={name}
      className={`onClick	   select-none rounded-md font-bold  text-white  ${className} `}
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
        {children}
      </label>
    </>
  );
}

export default Modal;
