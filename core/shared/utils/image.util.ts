import { v4 as uuid } from 'uuid';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, file);
};
export const calculationWidthHeight = (width: number, height: number, imgWidth: number, imgHeight: number): ImageSize => {
    if (imgWidth > width || imgHeight > height) {
      if (imgWidth > imgHeight) {
        height = (width / imgWidth) * imgHeight;
      } else {
        width = (height / imgHeight) * imgWidth;
      }
    } else {
      height = imgHeight;
      width = imgWidth;
    }
    return {
      width: width,
      height: height,
    };
};

export interface ImageSize {
  width: number;
  height: number;
}

export const filename = () => {
  return uuid() + '-' + Math.random().toString(20).substring(2, 10) + '.png';
};

