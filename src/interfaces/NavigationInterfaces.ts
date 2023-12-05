import {DataArtics} from './ArticsInterfaces';

export type RootStackParamList = {
  Feed: undefined;
  Home: {
    screen: 'Detail';
    params: {
      item: DataArtics;
    };
  };
  Detail: {item: DataArtics};
};
