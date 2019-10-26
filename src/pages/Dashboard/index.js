/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {withNavigationFocus} from 'react-navigation';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import Topics from '../../components/Topics';
import api from '../../services/api';

import {
  Container,
  Header,
  ImageLogo,
  ContainerHeader,
  TextInfo,
  Form,
  FormInput,
  List,
  InfoButton,
} from './styles';

function Dashboard({navigation}) {
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState('');
  const [date] = useState(new Date());
  const [refreshing] = useState(false);

  useEffect(() => {
    async function loadTopics() {
      const response = await api.get('meetups');

      const data = response.data.map(m => ({
        ...m,
        formattedDate: format(parseISO(m.date), "d 'de' MMMM', às' hh'h'mm", {
          locale: pt,
        }),
      }));
      setTopics(data);
    }
    loadTopics();
  }, [date]);

  return (
    <Background>
      <Container>
        <Header>
          <ImageLogo source={logo} />
        </Header>

        <Form>
          <FormInput
            icon="search"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Não encontou? Pesquise aqui"
            value={search}
            onChangeText={setSearch}
          />
        </Form>

        <ContainerHeader>
          <TextInfo>Conteúdo</TextInfo>
        </ContainerHeader>

        <List
          data={topics}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Topics data={item} />}
          refreshing={refreshing}
        />

        <InfoButton onPress={() => navigation.navigate('Vocational')}>
          Pesquisa Vocacional
        </InfoButton>
        <InfoButton onPress={() => navigation.navigate('Indication')}>
          Indique-me onde vou
        </InfoButton>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default withNavigationFocus(Dashboard);
