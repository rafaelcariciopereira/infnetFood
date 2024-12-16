import { View, Text, FlatList, StyleSheet , TouchableOpacity } from 'react-native';
import {useState} from 'react'
import Carrinho from '../Carrinho/index.jsx'


const CategoriaDetalhes = ({ route }) => {
  const { categoria, restaurantes } = route.params;
  const [carrinho, setCarrinho] = useState([]);


  const produtosDaCategoria = [];

  restaurantes.forEach(restaurante => {
    restaurante.produtos.forEach(produto => {
      if (produto.categoria === categoria) {
        produtosDaCategoria.push({ ...produto, restaurante: restaurante.nome });
      }
    });
  });

  const addCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.id === produto.id);
      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prevCarrinho, { ...produto, quantidade: 1 }];
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos de {categoria}</Text>
      <FlatList
        data={produtosDaCategoria}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.nome}</Text>
            <Text style={styles.productRestaurant}>Restaurante: {item.restaurante}</Text>
            <Text style={styles.productPrice}>R$ {item.preco.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => addCarrinho(item)}
            >
              <Text style={styles.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  productItem: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    color: '#333',
  },
  productRestaurant: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  botao: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CategoriaDetalhes;


