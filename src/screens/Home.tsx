import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('BookingDetail', {
      headerTitle: '',
      noBorder: true,
    });
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <TouchableOpacity onPress={onPress}>
          <Text>Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
