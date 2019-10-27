import React, {useState} from 'react';
import {Text} from 'react-native';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import {
  Container,
  ImageLogo,
  Header,
  Form,
  Question,
  FormText,
  FormInput,
} from './styles';
import {RadioButton} from 'react-native-paper';

export default class Vocational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: 'first'};
  }
  render() {
    return (
      <Background>
        <Container>
          <Header>
            <ImageLogo source={logo} />
          </Header>
          <Question>
            <Text>Você já decidiu o que fazer?</Text>
          </Question>
          <FormText>
            <Text>sim</Text>
            <Text>Estou na dúvida</Text>
            <Text>não</Text>
          </FormText>
          <Form>
            <RadioButton
              value="first"
              status={this.state.checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked: 'first'});
              }}
              color="#10bed8"
            />
            <RadioButton
              value="second"
              status={this.state.checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked: 'second'});
              }}
              color="#10bed8"
            />
            <RadioButton
              value="thirt"
              status={this.state.checked === 'thirt' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked: 'thirt'});
              }}
              color="#10bed8"
            />
          </Form>
          <Question>
            <Text>Você tem dificuldade em aprender?</Text>
          </Question>
          <FormText>
            <Text>sim</Text>
            <Text>não</Text>
          </FormText>
          <Form>
            <RadioButton
              value="cinco"
              status={this.state.checked === 'cinco' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setChecked({checked: 'cinco'});
              }}
              color="#10bed8"
            />
            <RadioButton
              value="quatro"
              status={this.state.checked === 'quatro' ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setChecked({checked: 'quatro'});
              }}
              color="#10bed8"
            />
          </Form>
          <Question>
            <Text>Qual máteria você mais se destaca?</Text>
          </Question>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Sua resposta"
          />
        </Container>
      </Background>
    );
  }
}
