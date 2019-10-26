import React from 'react';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {Container, ImageLogo, Header} from './styles';

export default function Indication() {
  return (
    <Background>
      <Container>
        <Header>
          <ImageLogo source={logo} />
        </Header>
      </Container>
    </Background>
  );
}

Indication.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};
