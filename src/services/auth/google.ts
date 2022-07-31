import axios from 'libs/axios';

const useGoogle = async () => {
  const url = await axios.get('/auth/redirect');
  window.location.href = url.data;
};

export default useGoogle;
