import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Importe o componente da sua tela inicial
import { ProdutoSelect } from './src/screens/ProdutoSelect';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { limparSelecaoProdutos } from './src/localStorage/localStorage';
// limparSelecaoProdutos()


const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Define headerShown como false para esconder o cabeçalho
        /> */}
        <Stack.Screen
          name="ProdutoSelect"
          component={ProdutoSelect}
          options={{ headerShown: false }} // Define headerShown como false para esconder o cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
