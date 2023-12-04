import { BASE_URL_IMAGE} from '@constants/env';

export const getImageDataArtic = (imageId: string) => {
  return `${BASE_URL_IMAGE}/iiif/2/${imageId}/full/843,/0/default.jpg`
};
