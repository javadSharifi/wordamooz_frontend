import { fontSizeContext } from 'context/FontSizeContext';
import { ICartPost } from 'interfaces';
import { useContext } from 'react';
import Action from './Action';
import PostCardButton from './PostCardButton';

function CardPost({ id: postId, body, word, meaning, categoryId }: ICartPost) {
    const { font:size } = useContext(fontSizeContext);

  return (
    <div data-aos="zoom-in-up" className="  group  card relative h-fit  ">
      <img
        className=" aspect-square  h-52 w-full select-none rounded-3xl  object-cover  object-center p-2    "
        loading="lazy"
        src={`https://picsum.photos/id/${postId}/534/200`}
        alt="avatar"
      />
      <Action categoryId={categoryId} postId={postId} />
      <PostCardButton word={word} />

      <div className={` absolute top-1/2 left-4 inline-block  cursor-pointer items-center rounded-xl bg-slate-50 px-6 py-3   shadow-md  shadow-slate-200/70 dark:bg-[#272727db]  dark:shadow-md dark:shadow-slate-900 `}>
        <h1 className={`mx-3 inline-block text-${size} font-semibold text-gray-500  dark:text-gray-300 `}>
          {word}
        </h1>
      </div>

      <div className="px-6 py-4  font-bold text-gray-500/90">
        <p className={`py-2 text-${size} selection:bg-sky-300 selection:text-white`}>
          {meaning}
        </p>
        <p className={` whitespace-pre-wrap break-words py-2  text-${size}  selection:bg-sky-300 selection:text-white dark:text-white`}>
          {body}
        </p>
      </div>
    </div>
  );
}

export default CardPost;
