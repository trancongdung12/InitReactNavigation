import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Favourite from '../../screens/Favourite';
import MailBox from '../../screens/MailBox';
import MyBooking from '../../screens/MyBooking';
import Settings from '../../screens/Settings';
import HomeTab from './HomeTab';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  const RightButton = ({onPress}: {onPress: () => void}) => {
    return (
      <TouchableOpacity style={styles.mRight} onPress={onPress}>
        <Icon style={styles.mTop} size={20} name="ic-search-normal" />
      </TouchableOpacity>
    );
  };

  const defaultBadgeProps = {
    tabBarBadgeStyle: {
      width: 10,
      height: 10,
      minWidth: 10,
      minHeight: 10,
      borderRadius: 6,
      marginTop: 4,
      backgroundColor: '#FFCD17',
    },
  };

  const defaultHeaderProps = {
    headerTitleAlign: 'center',
    headerStyle: {
      borderBottomWidth: 0.4,
      borderBottomColor: '#8E9193',
    },
  };

  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: '#FFFFFF'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTab}
        options={() => {
          return {
            tabBarLabel: () => {
              return <Text>{'Home'}</Text>;
            },
            // tabBarIcon: ({focused}) => (
            //   <Icon
            //     style={styles.mTop}
            //     size={20}
            //     name={focused ? 'ic-bold-home-3' : 'ic-home-3'}
            //     color={Colors.mainDefault}
            //   />
            // ),
            headerShown: false,
          };
        }}
      />
      <BottomTab.Screen
        name="FavouriteTab"
        component={Favourite}
        options={() => ({
          ...defaultHeaderProps,
          tabBarLabel: () => {
            return <Text>{'Favourite'}</Text>;
          },
          // tabBarIcon: ({focused}) => (
          //   <Icon
          //     style={styles.mTop}
          //     size={20}
          //     name={focused ? 'ic-bold-heart' : 'ic-heart'}
          //     color={Colors.mainDefault}
          //   />
          // ),
          headerTitle: 'Favourite',
        })}
      />
      <BottomTab.Screen
        name="MyBookingTab"
        component={MyBooking}
        options={({navigation}) => ({
          ...defaultHeaderProps,
          tabBarLabel: () => {
            return <Text>{'myBooking'}</Text>;
          },
          // tabBarIcon: ({focused}) => (
          //   <Icon
          //     style={styles.mTop}
          //     size={20}
          //     name={focused ? 'ic-bold-mybooking' : 'ic-mybooking'}
          //     color={Colors.mainDefault}
          //   />
          // ),
          headerTitle: 'myBooking',
          // headerRight: () => {
          //   if (!user?.token) {
          //     return null;
          //   }
          //   return (
          //     <RightButton
          //       onPress={() => {
          //         navigation.navigate('SearchBooking', {
          //           headerTitle: t('myBooking.searchBooking'),
          //         });
          //       }}
          //     />
          //   );
          // },
        })}
      />
      <BottomTab.Screen
        name="MailboxTab"
        component={MailBox}
        options={({route}) => {
          // const isVisibleDot = route?.params?.isVisibleDot;
          return {
            // ...defaultBadgeProps,
            // ...defaultHeaderProps,
            // tabBarBadge: isVisibleDot ? '' : null,
            tabBarLabel: () => {
              return <Text>{'mailbox'}</Text>;
            },
            // tabBarIcon: ({focused}) => (
            //   <Icon
            //     style={styles.mTop}
            //     size={20}
            //     name={focused ? 'ic-bold-mailbox' : 'ic-mailbox'}
            //     color={Colors.mainDefault}
            //   />
            // ),
            headerTitle: 'mailbox',
          };
        }}
      />
      <BottomTab.Screen
        name="SettingTab"
        component={Settings}
        options={() => ({
          ...defaultHeaderProps,
          tabBarLabel: () => {
            return <Text>{'setting'}</Text>;
          },
          // tabBarIcon: ({focused}) => (
          //   <Icon
          //     style={styles.mTop}
          //     size={20}
          //     name={focused ? 'ic-bold-setting-2' : 'ic-setting-2'}
          //     color={Colors.mainDefault}
          //   />
          // ),
          headerTitle: 'setting',
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  mTop: {marginTop: 8},
  mRight: {marginRight: 20},
});
