import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';

export default function Vocational() {
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
