import {
  GlobeAltIcon,
  MoonIcon,
  PencilAltIcon,
  TranslateIcon,
} from '@heroicons/react/outline';
import BtnAction from './BtnAction';
import DarkMod from './DarkMod';
import FontSize from './FontSize';
import Language from './Language';

const Action = () => {
  return (
    <div className="mt-8 ">
      <BtnAction Icon={GlobeAltIcon} name="Language">
        <Language/>
      </BtnAction>
      <BtnAction Icon={MoonIcon} name="Dark Mod">
        <DarkMod />
      </BtnAction>
      <BtnAction Icon={PencilAltIcon} name="Fotn Size">
        <FontSize />
      </BtnAction>
    </div>
  );
};

export default Action;
