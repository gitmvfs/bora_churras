import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Importe o componente da sua tela inicial
import { ProdutoScreen } from './src/screens/ProdutoScreen';
import { ConsumoScreen } from './src/screens/ConsumoScreen';
import { StatusBar } from 'react-native'; // Importe o StatusBar aqui
import { MercadoScreen } from './src/screens/MercadoScreen';
import { ReceitaScreen } from './src/screens/ReceitaScreen';
import { ReceitaProvider } from './src/contexts/receitaContext';
import { MenuReceitaScreen } from './src/screens/MenuReceitaScreen';
// limparSelecaoProdutos()
const Stack = createStackNavigator();

function App() {
  return (
    <>
      <ReceitaProvider>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} />
            <Stack.Screen name="ConsumoScreen" component={ConsumoScreen} />
            <Stack.Screen name="MercadoScreen" component={MercadoScreen} />
            <Stack.Screen name="ReceitaScreen" component={ReceitaScreen} />
            <Stack.Screen name="MenuReceitaScreen" component={MenuReceitaScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReceitaProvider>
    </>
  );
}

export default App;
