import Modal from 'components/Modal';
import React from 'react';
import Action from './action';
import Avatar from './Avatar';
import BtnLogout from './BtnLogout';

import Information from './Information';

function Settings() {
  return (
    <Modal name="settings">
      <div className="  relative  min-h-[50vh] w-full  flex-col  items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-[#1E293B] lg:min-h-[25rem] lg:w-[25rem]">
        <Avatar />
        <Information />
        <Action />
        <BtnLogout />
      </div>
    </Modal>
  );
}

export default Settings;
