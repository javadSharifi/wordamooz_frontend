import { useMutation } from 'react-query';
import sanctum from './sanctum';

import axios from '../../libs/axios';
import { IAuthUser, IResource } from '../../interfaces';

type TData = {
  email: string;
  password: string;
};

const login = async (data: TData) => {
  await sanctum();
  const result = await axios.post<IResource<IAuthUser>>('/auth/login', data);
  return result;
};

const useLogin = () => useMutation(login);

export default useLogin;
