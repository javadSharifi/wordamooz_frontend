import Logo from './Logo';

import ListIcon from './ListIcon';
import Donate from './Donate';

function Sidebar() {
  return (
    <div
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-duration="1000"
      className=" sticky top-0 hidden h-screen py-4 pl-3 lg:inline-block lg:w-[15%]   xl:w-[13%] "
    >
      <div className="  relative h-full rounded-xl  bg-slate-100 shadow-lg  dark:bg-American-Blue  dark:text-white     ">
        <Logo />
        <ListIcon />
        <Donate />
      </div>
    </div>
  );
}

export default Sidebar;
