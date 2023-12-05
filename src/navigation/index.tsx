import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {colors, theme} from '@constants/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Icon from 'phosphor-react-native';
import {FeedScreen, DetailScreen, AccountScreen} from '@screens/index';
import {RootStackParamList} from 'src/interfaces';
import {FavouritesScreen} from '@screens/FavouritesScreen';

export const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const getColorIcon = (focused: boolean) =>
    focused ? colors.pink : colors.white;
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.safeAreView}>
        <StatusBar backgroundColor={colors.mainBackground} />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={() => ({
              tabBarStyle: {
                backgroundColor: colors.mainBackground,
                position: 'absolute',
                borderTopWidth: 0,
              },
              headerShown: false,
            })}>
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Icon.House weight="fill" color={getColorIcon(focused)} />
                ),
                tabBarShowLabel: false,
              }}
              name="Home"
              component={FeedNavigator}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Icon.Heart weight="fill" color={getColorIcon(focused)} />
                ),
                tabBarShowLabel: false,
              }}
              name="Favourites"
              component={FavouritesScreen}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({focused}) => (
                  <Icon.User weight="fill" color={getColorIcon(focused)} />
                ),
                tabBarShowLabel: false,
              }}
              name="Account"
              component={AccountScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};
const FeedNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          presentation:'modal',
          animation: 'fade',
        }}
      />
    </Stack.Navigator>
  );
};
