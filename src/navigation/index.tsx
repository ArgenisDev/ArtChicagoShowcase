import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeedScreen} from '../screens';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {StatusBar} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {colors, theme} from '@constants/index';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.safeAreView}>
        <StatusBar backgroundColor={colors.black} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Feed" component={FeedScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  );
};
