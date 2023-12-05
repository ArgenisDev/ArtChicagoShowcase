import React from 'react';
import {Box, Text, WrapperComponent} from '@utils/components';
import {feedStrings} from 'src/lang/es';
import {useGetDataArtic, useGetFavouritesPromiseAll} from '@hooks/index';
import {FlatList} from 'react-native';
import {CardsFeed} from 'src/components/feed/Cards';
import {normalize} from '@utils/functions';
import { favoritesStrings } from 'src/lang/es/favourites';

export const FavouritesScreen= () => {
  const {data} = useGetFavouritesPromiseAll();
  
  return (
    <WrapperComponent>
      <Box ml="xxxs" mr="xxxs" flex={1}>
        <Text variant="header" color="pink" mt="xxxs">
          {favoritesStrings.title}
        </Text>
        <FlatList
          data={data}
          renderItem={({item}) => <CardsFeed item={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListEmptyComponent={()=><Text color='white'>{favoritesStrings.no_favorites_yet}</Text>}
          ListFooterComponent={() => <Box height={normalize(60)} />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => `${item.id}`}
        />
      </Box>
    </WrapperComponent>
  );
};
