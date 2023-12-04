import {BASE_URL} from '@constants/env';
import axios from 'axios';
import {ArticsInterface} from 'src/interfaces';

export const getDataArtic = async () => {
  const response = await axios.get<ArticsInterface>(`${BASE_URL}/v1/artworks`);
  return response;
};
