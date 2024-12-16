import { View, Text, FlatList, StyleSheet , TouchableOpacity} from 'react-native';
import {useEffect , useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Pedidos = () => {
  const [carrinho, setCarrinho] = useState([]);

  const navigation = useNavigation()

  useEffect(() => {
    const loadCarrinho = async () => {
      try {
        const storedCarrinho = await AsyncStorage.getItem('carrinho');
        if (storedCarrinho) {
          setCarrinho(JSON.parse(storedCarrinho));
        }
      } catch (error) {
        console.error('Erro ao carregar o carrinho:', error);
      }
    };

    loadCarrinho();
  }, []);

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.nome} x {item.quantidade}</Text>
            <Text>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: R$ {calcularTotal().toFixed(2)}</Text>
      <TouchableOpacity 
        style={styles.confirmButton} 
        onPress={() => navigation.navigate('Checkout', {
          carrinho: carrinho 
        })}
          >
        <Text style={styles.confirmButtonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pedidos;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
    },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold' 
    },
  cartItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 5 
  },
  total: { 
    marginTop: 10, 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
