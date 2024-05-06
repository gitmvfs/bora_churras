import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Importe o componente da sua tela inicial
import { ProdutoScreen } from './src/screens/ProdutoScreen';
import { ConsumoScreen } from './src/screens/ConsumoScreen';
import { StatusBar } from 'react-native'; // Importe o StatusBar aqui
// limparSelecaoProdutos()
const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} />
          <Stack.Screen name="ConsumoScreen" component={ConsumoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
