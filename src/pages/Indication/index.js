import React from 'react';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import {View, Text} from 'react-native';
import {Container, ImageLogo, Header, Title, Content, Info} from './styles';

export default class Indication extends React.Component {
  render() {
    return (
      <Background>
        <Container>
          <Header>
            <ImageLogo source={logo} />
          </Header>
          <Info>
            <Content>
              <Title>Uni-Facef</Title>
              <Title>Franca</Title>
            </Content>
          </Info>
          <Info>
            <Content>
              <Title>Unifran</Title>
              <Title>Franca</Title>
            </Content>
          </Info>
          <Info>
            <Content>
              <Title>Anhanguera</Title>
              <Title>Franca</Title>
            </Content>
          </Info>
          <Info>
            <Content>
              <Title>Unesp</Title>
              <Title>Franca</Title>
            </Content>
          </Info>
          <Info>
            <Content>
              <Title>Unip</Title>
              <Title>Ribeirão Preto</Title>
            </Content>
          </Info>
          <Info>
            <Content>
              <Title>Fatec</Title>
              <Title>Franca</Title>
            </Content>
          </Info>
        </Container>
      </Background>
    );
  }
}

Indication.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};
