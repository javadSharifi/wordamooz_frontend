import { authContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import useMe from 'services/auth/user';
import Loading from './Loading';

type StarterProps = {
  children: any;
};

function Starter({ children }: StarterProps) {
  useMe();
  const [auth] = useContext(authContext);
  return auth.loading === null ? <Loading /> : children;
}

export default Starter;
