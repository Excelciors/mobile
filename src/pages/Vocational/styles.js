import styled from 'styled-components/native';
import Input from '../../components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 10px;
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

export const Form = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background: #fff;
  height: 80px;
  font-weight: bold;
`;

export const FormText = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background: #fff;
`;

export const Question = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background: #fff;
  height: 80px;
`;
// export const FormInput = styled(Input)`
//   margin-bottom: 10px;
// `;
export const FormInput = styled(Input)`
  margin-right: 20px;
  margin-left: 20px;
`;
