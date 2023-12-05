import {BASE_URL} from '@constants/env';
import axios from 'axios';
import {ArticsInterfaceById} from 'src/interfaces';

export const getDataById = async (id: string | number) => {
  const response = await axios.get<ArticsInterfaceById>(
    `${BASE_URL}/v1/artworks/${id}`,
  );
  return response.data.data;
};
