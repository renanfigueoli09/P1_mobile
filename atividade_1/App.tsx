import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/Components/TelaPadrao';
import Rotas from './src/Telas/Rotas';

Reactotron.configure().useReactNative().connect();

export default function App() {
  return <TelaPadrao><Rotas /></TelaPadrao>;
}
