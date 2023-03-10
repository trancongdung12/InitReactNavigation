// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import BottomTabs from './src/navigation/BottomTabs';
import BookingDetail from './src/screens/Booking/BookingDetail';
import Intro from './src/screens/Intro';

const Stack = createNativeStackNavigator();

const SCREENS = {
  BookingDetail,
};

const renderListChild = () => (
  <>
    {Object.keys(SCREENS).map(item => {
      return (
        <Stack.Screen
          key={item}
          name={item}
          component={SCREENS[item]}
          // options={({route, navigation}) => {
          //   return {
          // contentStyle: {backgroundColor: Colors.white},
          // headerShown: route?.params?.isTopBarEnable,
          // title: route?.params?.headerTitle,
          // headerTitleAlign: 'center',
          // headerShadowVisible: !route?.params?.noBorder,
          // ...(SCREEN_HAS_BACK_HOME_RIGHT_BUTTONS.includes(item) && {
          //   headerRight: () => {
          //     return (
          //       <TouchableOpacity
          //         onPress={() => {
          //           navigation.navigate('HomeTab');
          //         }}>
          //         <Icon
          //           name="ic-home-3"
          //           color={Colors.primaryText}
          //           size={20}
          //         />
          //       </TouchableOpacity>
          //     );
          //   },
          // }),
          // };
          // }}
        />
      );
    })}
  </>
);

const AppStackScreen = () => {
  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      // screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />

      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          animation: 'fade',
        }}>
        {/* {renderListModal()} */}
      </Stack.Group>

      {renderListChild()}
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
}

export default App;
