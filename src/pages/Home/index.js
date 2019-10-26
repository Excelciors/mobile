import React from 'react';
import {View} from 'react-native';

// import { Container } from './styles';

export default function Home() {
  return <View />;
}

Home.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};
