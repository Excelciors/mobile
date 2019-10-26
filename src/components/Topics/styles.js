import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
  background: #10bed8;
  margin-bottom: 20px;
  padding: 1px;
`;

export const Content = styled.View`
  background: #fff;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 64px;
  height: 64px;
  align-content: stretch;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: center;
  padding: 5px 0;
`;

export const InfoText = styled.Text`
  color: #999999;
  font-size: 13px;
  margin-left: 5px;
`;
