import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';

const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={({route}) => {
          return {
            title: route?.params?.headerTitle,
            headerShown: false,
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
