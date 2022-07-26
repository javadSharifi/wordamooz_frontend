import { useMutation } from 'react-query';
import sanctum from './sanctum';

import axios from '../../libs/axios';
import { IAuthUser, IResource } from '../../interfaces';

export type TData = {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
};

const register = async (data: TData) => {
  await sanctum();
  const result = await axios.post<IResource<IAuthUser>>('auth/register', data);
  return result;
};

const useRegister = () => useMutation(register);
export default useRegister;
