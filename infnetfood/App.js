import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/index.jsx';
import Home from './components/Home/index.jsx';
import CategoriaDetalhes from './components/Detalhes/index.jsx'
import Carrinho from './components/Carrinho/index.jsx'
import Perfil from './components/Perfil/index.jsx'
import Pedidos from './components/Pedidos/index.jsx'
import Checkout from './components/Checkout/index.jsx'
import RestaurantesMapa from './components/Mapa/index.jsx'
import Restaurantes from './components/Restaurantes/index.jsx'
import restaurantes from './components/dados/index.js';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          initialParams={{ restaurantes}} 
        />
        <Stack.Screen name="CategoriaDetalhes" component={CategoriaDetalhes}/>
        <Stack.Screen name="Carrinho" component={Carrinho}/>
        <Stack.Screen name="Perfil" component={Perfil}/>
        <Stack.Screen name="Pedidos" component={Pedidos}/>
        <Stack.Screen name="Checkout" component={Checkout}/>
        <Stack.Screen name="Mapa" component={RestaurantesMapa}/>
        <Stack.Screen name="Restaurantes" component={Restaurantes}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
