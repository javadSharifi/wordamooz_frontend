import { authContext } from 'context/AuthContext';
import axios from 'libs/axios';
import { useContext } from 'react';
import { useMutation } from 'react-query';

const logout = async () => {
  const result = await axios.post('/auth/logout');
  return result;
};

const useLogout = () => {
  const [, setAuth] = useContext(authContext);
  return useMutation(logout, {
    onSuccess: () => {
      setAuth({
        loading: false,
        id: null,
        email: null,
        name: null,
        image: null,
      });
    },
  });
};
export default useLogout;
