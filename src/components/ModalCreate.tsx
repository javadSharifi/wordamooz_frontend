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
    <>
      <div
        onClick={() => setId(generateRandomNumber())}
        className="min-h-[10rem]  w-full cursor-pointer overflow-hidden rounded-2xl border-2 dark:border-gray-600"
        >
        <ImgUpload />
      </div>
      <IdContext.Provider value={id}>{children}</IdContext.Provider>
      </>
  );
}

export default ModalCreate;
