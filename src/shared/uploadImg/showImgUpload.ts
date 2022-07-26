import { toast } from 'react-hot-toast';
import resizeFile from './compersAndResilt';

const showImgUpload = async (event: any, imgPath: any, setImgFile: any) => {
  try {
    const file = event.target.files[0];
    const image = await resizeFile(file);
    setImgFile(image);
    const render = new FileReader();
    render.onload = (e: any) => {
      imgPath(e.target?.result);
    };
    render.readAsDataURL(image);
  } catch (eer) {
    toast.error('img upload error');
  }
};

export default showImgUpload;
