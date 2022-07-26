import axios from '../../libs/axios';

const sanctum = async () => {
  const result = await axios.get('/sanctum/csrf-cookie');
  return result;
};

export default sanctum;
