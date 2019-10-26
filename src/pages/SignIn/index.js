/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';
import {Image, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from '../../assets/logo.png';

import Background from '../../components/Background';
import {signInRequest} from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Apelido"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={() => handleSubmit()}>
            ENTRAR
          </SubmitButton>
          <SubmitButton onPress={() => navigation.navigate('SignUp')}>
            CADASTRE-SE
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
