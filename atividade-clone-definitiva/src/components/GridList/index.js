import React from 'react';
import { FlatList } from 'react-native';
import spacing from '../../themes/spacing';
import { Card, SpacingHeight, TextInfo, Table } from './styles';

const ListaColumn = [
  {
    id: 1,
    column: "Produto",
  },
  {
    id: 2,
    column: "Quantidade",
  },
  {
    id: 3,
    column: "Preço Unitário",
  },
  {
    id: 4,
    column: "Total",
  },
];

const Lista = [
  {
    id: 1,
    name: "Produto 1",
    quantity: '2',
    price: "R$ 25,00",
    total: "R$ 50,00",
  },
  {
    id: 2,
    name: "Produto 4",
    quantity: '1',
    price: "R$ 100,00",
    total: "R$ 100,00",
  },
  {
    id: 3,
    name: "Produto 5",
    quantity: '1',
    price: "R$ 40,00",
    total: "R$ 40,00",
  },
];

const Item = ({ name, quantity, price, total }) => (
  <Table>
    <TextInfo>{name}</TextInfo>
    <TextInfo>{quantity}</TextInfo>
    <TextInfo>{price}</TextInfo>
    <TextInfo>{total}</TextInfo>
  </Table>
);

const Column = ({ column }) => (
  <Table>
    <TextInfo>{column}</TextInfo>
  </Table>
);

export const GridList = () => {

  const renderizedItem = ({ item }) => (
    <Item
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      total={item.total}
    />
  );

  const renderizedColumn = ({ column }) => (
    <Column
      column={column.column}
    />
  );

  return (
    <Card>
      <FlatList
       data={ListaColumn} 
       renderItem={renderizedColumn}
       keyExtractor={(title) => title.id}
       horizontal={false}
     />
      <FlatList
        data={Lista}
        renderItem={renderizedItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
      <SpacingHeight height={spacing.xxl} />
      <TextInfo>Total da compra</TextInfo>
      <SpacingHeight height={spacing.extraLarge} />
      <TextInfo>Data da compra</TextInfo>
    </Card>
  )
}