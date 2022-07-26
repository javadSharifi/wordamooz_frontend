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

function ListIcon() {
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  return (
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

      <ButtonSidebar
        name="Settings"
        onClick={() => navigate('/Settings')}
        Icon={CogIcon}
        delay="700"
      />

      <ButtonSidebar
        name="Logout"
        onClick={() => logout()}
        Icon={LogoutIcon}
        delay="850"
      />
    </div>
  );
}

export default ListIcon;
