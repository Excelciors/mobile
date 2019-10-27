import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 64px;
`;

export const ImageLogo = styled.Image`
  width: 130px;
  height: 70px;
`;

export const Info = styled.View`
  background: #10bed8;
  margin-bottom: 20px;
  padding: 1px;
  margin-top: 13px;
  margin-left: 10px;
  margin-right: 10px;
`;
export const Content = styled.View`
  background: #fff;
  padding: 3px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
