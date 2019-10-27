import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Container, Content, Title} from './styles';

export default function Topics({data}) {
  return (
    <Container>
      <Content>
        <Title>{data.name}</Title>
        <Icon name="stars" size={24} color="#000" />
      </Content>
    </Container>
  );
}

Topics.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
