import { FilmIcon, VolumeUpIcon } from '@heroicons/react/outline';
import React from 'react';
import CartButton from './Button';

function PostCardButton({ word }: { word: string }) {
  return (
    <div className="postcard‌‌-Button dark:text-white  absolute  ">
      <CartButton
        href={`https://fa.forvo.com/word/${word}/#en`}
        Icon={VolumeUpIcon}
      />
      <CartButton
        href={`https://getyarn.io/yarn-find?text=${word}`}
        Icon={FilmIcon}
      />
    </div>
  );
}

export default PostCardButton;
