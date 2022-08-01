import { GlobeAltIcon, MoonIcon, TranslateIcon } from '@heroicons/react/outline';
import React from 'react';
import BtnAction from './BtnAction';
import CheckboxAction from './CheckboxAction';

const Action = () => {
  return (
    <div className="mt-8 ">
      <BtnAction Icon={GlobeAltIcon} name="Language">
        <TranslateIcon className='w-8' />
      </BtnAction>
      <BtnAction Icon={MoonIcon} name="Dark Mod">
        <CheckboxAction />
      </BtnAction>
    </div>
  );
};

export default Action;
