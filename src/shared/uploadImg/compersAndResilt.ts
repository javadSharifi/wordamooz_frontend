import resizer from 'react-image-file-resizer';

const resizeFile = (file: any): any =>
  new Promise((resolve) => {
    resizer.imageFileResizer(
      file,
      384, // maxWidth
      208, // maxHeight
      'JPEG', // fileType
      80, // quality
      0, // rotation
      (uri: any) => {
        resolve(uri); // return uri
      },
      'file', // outputFormat
      200, // targetWidth
      208 // targetHeight
    );
  });

export default resizeFile;
