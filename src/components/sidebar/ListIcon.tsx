import React from 'react';
import ButtonSidebar from './ButtonSidebar';
import {
  CogIcon,
  HeartIcon,
  HomeIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import useLogout from 'services/auth/logout';
import { useNavigate } from 'react-router-dom';
import { OpenModal } from 'components/Modal';
import ModalSettings from './ModalSettings';

function ListIcon() {
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  return (
    <>
    <div className="mt-14  flex  w-full flex-col items-center gap-3 ">
      <ButtonSidebar
        Icon={HomeIcon}
        delay="400"
        onClick={() => navigate('/')}
        name={'home'}
      />
      <ButtonSidebar
        Icon={HeartIcon}
        delay="550"
        onClick={() => navigate('/Heart')}
        name={'Heart'}
      />

      <OpenModal  className='buttonSidebar  text-gray-500 font-semibold  ' name='settings' >
         <CogIcon
        className=" ml-3 w-6     grayscale group-hover:text-white"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay='650'
      />
      <h1
        className="group-hover:text-white"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-delay='650'
      >
        settings
      </h1>
        </OpenModal>

      <ButtonSidebar
        name="Logout"
        onClick={() => logout()}
        Icon={LogoutIcon}
        delay="850"
      />
    </div>
        </>
  );
}

export default ListIcon;
