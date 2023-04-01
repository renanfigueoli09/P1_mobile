import React from 'react';

import { FlatList } from 'react-native';

import Item from './Item';

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DE BANHO NO SEU GATO! Mas se precisar nós damos.",
    img: "https://i2.wp.com/atacama.ind.br/wp-content/uploads/2016/07/como-montar-um-pet-shop.png"
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
    img:"https://institutolaika.com.br/wp-content/uploads/2021/03/vacina-felina-v4.png"
  },
  {
    id: 3,
    nome: "Vacina Antirrábica",
    preco: 99.9,
    descricao: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    img:"https://www.valenca.rj.gov.br/wp-content/uploads/2021/09/Vacina.jpeg"
  }
];

export default function Servicos() {
  return <>
    <FlatList
      data={servicos}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
    />
  </>
}
