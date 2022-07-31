import React, { useRef, useState } from 'react';
import iUpload from 'assets/img/picture.png';
import showImgUpload from './showImgUpload';

function ImgUpload() {
  const Upload = useRef<any>();
  const [imgPath, setImgPath] = useState<any>();
  const [imgFile, setImgFile] = useState<any>();

  if (imgPath) {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={() => setImgPath(null)}
          className="btn btn-active btn-ghost btn-circle btn-sm absolute right-4 top-4"
        >
          ✕
        </button>
        <img
          src={imgPath}
          alt="Shoes"
          className=" max-h-48 w-full  rounded-xl "
          onDoubleClick={() => setImgPath(null)}
        />
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() => Upload.current.click()}
      className=" center h-48 w-full cursor-pointer flex-col gap-2 overflow-hidden rounded-xl border-2  border-dashed text-xl"
    >
      <img src={iUpload} alt="Upload" className="w-16" />
      <h1>Upload Img or Film</h1>
      <input
        onChange={(e) => showImgUpload(e, setImgPath, setImgFile)}
        ref={Upload}
        type="file"
        className="hidden"
        accept=".jpg, .jpeg, .png ,.mp4 "
      />
    </button>
  );
}

export default ImgUpload;
