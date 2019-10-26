import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: #10bed8;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const ButtonText = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-left: 5px;
`;
