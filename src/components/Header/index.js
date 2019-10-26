import React from 'react';
import logo from '../../assets/lpgo.png';

import {Header, ImageLogo} from './styles';

export default function Header() {
  return (
    <Container>
      <ImageLogo source={logo} />
    </Container>
  );
}
