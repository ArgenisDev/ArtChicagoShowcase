import React from 'react';
import {Box, Text, WrapperComponent} from '@utils/components';
import {feedStrings} from 'src/lang/es';
import {useGetDataArtic} from '@hooks/index';
import {FlatList} from 'react-native';
import {CardsFeed} from 'src/components/feed/Cards';
import {normalize} from '@utils/functions';

export const FeedScreen = () => {
  const {data} = useGetDataArtic();
  return (
    <WrapperComponent>
      <Box ml="xxxs" mr="xxxs" flex={1}>
        <Text variant="header" color="pink" mt="xxxs">
          {feedStrings.title}
        </Text>
        <FlatList
          data={data}
          renderItem={({item}) => <CardsFeed item={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListFooterComponent={() => <Box height={normalize(60)} />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => `${item.id}`}
        />
      </Box>
    </WrapperComponent>
  );
};
