import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageProps) {
  return (
    <div className=" h-[45%]  w-full hidden md:inline-block  shadow-lg shadow-slate-200  md:h-full   md:justify-center md:self-center   ">
      <img
        className=" h-full w-full overflow-hidden   rounded-2xl object-cover "
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default Image;
