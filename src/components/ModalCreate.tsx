import React, { useState } from 'react';
import ImgUpload from 'shared/uploadImg/ImgUpload';

type ModalCreateProps = {
  children: React.ReactNode;
};

export const IdContext = React.createContext<number | null>(null);

function generateRandomNumber() {
  return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}

function ModalCreate({ children }: ModalCreateProps) {
  const [id, setId] = useState<number>(generateRandomNumber());

  return (
    <label
      htmlFor=""
      className="flex min-h-[25rem] w-[25rem] flex-col items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-[#1E293B] lg:w-[30rem]"
    >
      <div
        onClick={() => setId(generateRandomNumber())}
        className="min-h-[10rem]  w-full cursor-pointer overflow-hidden rounded-2xl border-2 dark:border-gray-600"
      >
        <ImgUpload />
      </div>
      <IdContext.Provider value={id}>{children}</IdContext.Provider>
    </label>
  );
}

export default ModalCreate;
