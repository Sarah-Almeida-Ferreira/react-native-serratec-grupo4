import { MainContainer } from '../../components/MainContainer/styles';
import { DevCard } from '../../components/DevCard';
import { Header } from '../../components/Header';
import { CardsContainer, LogoArrepio } from './styles';
import { FlatList } from 'react-native';
import React from 'react';

const Lista = [
    {
        id: 1,
        image: require('../../../assets/bruxinha200.png'),
        name: "Sarah Almeida"
    },
    {
        id: 2,
        image: require('../../../assets/lobiboy200.png'),
        name: "André Lucas"
    },
    {
        id: 3,
        image: require('../../../assets/vampirinho200.png'),
        name: "Patrick Monteiro"
    },
    {
        id: 4,
        image: require('../../../assets/frank200.png'),
        name: "Wanderson Chevrand"
    },
    {
        id: 5,
        image: require('../../../assets/muminha200.png'),
        name: "Theo Bittencourt"
    },
    {
        id: 6,
        image: require('../../../assets/pereira200.png'),
        name: "Cheyenne Pereira"
    },
  ];

export const Home = () => {

    const renderizedItem = ({ item }) => (
        <DevCard
          image={item.image}
          name={item.name}
        />
    );

    return (
        <MainContainer>
            <Header title='Olá, Admin!' />
            <CardsContainer>
                <LogoArrepio source={require('../../../assets/turmadoarrepio.png')}/>
                <FlatList
                    data={Lista}
                    renderItem={renderizedItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </CardsContainer>
        </MainContainer>
    )
}