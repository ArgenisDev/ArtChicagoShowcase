import {useEffect, useState} from 'react';
import {getDataArtic} from 'src/server';
import {DataArtics} from 'src/interfaces';

export const useGetDataArtic = () => {
  const [data, setData] = useState<DataArtics[]>();
  const getData = async () => {
    const response = await getDataArtic();
    setData(response.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return {data};
};
