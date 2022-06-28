import React from "react";
import { FlatList, View, Text } from "react-native";

const Lista = [
  {
    id:1,
    produto: "produto 1",
    preco: "Preço R$ 50",
    estoque: "1 Unidades em estoque",
  },
  {
    id:2,
    produto: "produto 5",
    preco: "Preço R$40",
    estoque: "20 Unidades em estoque",
  },
  {
    id: 3,
    produto: "produto 6",
    preco: "Preço R$ 70",
    estoque: "8 Unidades em estoque",
  }
];

const Item = ({produto,preco,estoque}) => (
  <View>
    <Text>
      {produto}
    </Text>
    <Text>
      {preco}
    <Text>
    </Text>
      {estoque}
    </Text>
  </View>
);

const Favorito = () => {
  const itemRenderizado = ({item}) => (
    <Item  produto={item.produto}
    preco={item.preco}
    estoque={item.estoque} />
  );

  return (
    <FlatList 
    data={Lista}
    renderItem={itemRenderizado} 
    keyExtractor={(item) => item.id} />
  
  )
};
export default Favorito;
