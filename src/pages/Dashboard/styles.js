import styled from 'styled-components/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 10px;
`;

export const FormInput = styled(Input)``;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  align-self: center;
  margin: 10px 0;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 80px;
`;

export const ImageLogo = styled.Image`
  width: 130px;
  height: 70px;
`;

export const TextInfo = styled.Text`
  color: #10bed8;
  font-size: 24px;
  margin: 0 15px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 20,
    showsVerticalScrollIndicator: false,
  },
})``;

export const InfoButton = styled(Button)`
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;
