import {useEffect} from "react"
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Carrinho = ({ carrinho, setCarrinho}) => {
  const navigation = useNavigation()

  useEffect(() => {
    const loadCarrinho = async () => {
      try {
        const storedCarrinho = await AsyncStorage.getItem('carrinho');
        if (storedCarrinho) {
          setCarrinho(JSON.parse(storedCarrinho));
        }
      } catch (error) {
        console.error('Erro ao carregar o carrinho do AsyncStorage', error);
      }
    };
    loadCarrinho();
  }, []);

  const calcularTotal = () => {
    return carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  };

  const removeItem = async (item1) => {
    const novoCarrinho = carrinho.filter(item => item.id !== item1.id);
    setCarrinho(novoCarrinho);
    try {
      await AsyncStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    } catch (error) {
      console.error('Erro ao salvar o carrinho no AsyncStorage', error);
    }
  };
  const finalizarCompra = async () => {
    try {
      await AsyncStorage.setItem("carrinho", JSON.stringify(carrinho)); 
      navigation.navigate("Pedidos"); 
    } catch (error) {
      console.error("Erro ao finalizar a compra", error);
    }
  };


  const renderCarrinhoItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>
        {item.nome} x {item.quantidade}
      </Text>
      <Text style={styles.cartItemPrice}>
        R$ {(item.preco * item.quantidade).toFixed(2)}
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => removeItem(item)}
      >
        <Text>remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.cartTitle}>Carrinho</Text>
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()} 
        renderItem={renderCarrinhoItem}
      />
      <Text style={styles.total}>Total: R$ {calcularTotal().toFixed(2)}</Text>
      <TouchableOpacity onPress={finalizarCompra}>
        <Text>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    position: 'relative', 
    paddingRight: 40, 

  },
  cartItemName: {
    fontSize: 15,
  },
  cartItemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  botao: {
    fontSize: 10,
  }
});

export default Carrinho;



