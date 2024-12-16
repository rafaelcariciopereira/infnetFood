import { View, Text, FlatList, TouchableOpacity, StyleSheet , ScrollView} from 'react-native';
import RestaurantesMapa from '../Mapa/index.jsx'

const Home = ({ route, navigation }) => {
  const { restaurantes } = route.params;

  const categorias = [];

  restaurantes.forEach(restaurante => {
    restaurante.produtos.forEach(produto => {
      if (!categorias.includes(produto.categoria)) {
        categorias.push(produto.categoria);
      }
    });
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Perfil:</Text>
      <TouchableOpacity
            style={styles.perfilItem}
            onPress={() => {
              navigation.navigate('Perfil');
            }}
          >
            <Text style={styles.perfilText}>Meu Perfil</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Pedidos:</Text>
      <TouchableOpacity
            style={styles.perfilItem}
            onPress={() => {
              navigation.navigate('Pedidos');
            }}
          >
            <Text style={styles.perfilText}>Meus Pedidos</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Mapa:</Text>
      <TouchableOpacity
            style={styles.perfilItem}
            onPress={() => {
              navigation.navigate('Mapa');
            }}
          >
            <Text style={styles.perfilText}>Mapa</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Restaurantes:</Text>
      <TouchableOpacity
            style={styles.perfilItem}
            onPress={() => {
              navigation.navigate('Restaurantes');
            }}
          >
            <Text style={styles.perfilText}>Restaurantes</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Categorias Disponíveis:</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => {
              navigation.navigate('CategoriaDetalhes', {
                categoria: item,
                restaurantes: restaurantes,
              });
            }}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
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
  categoryItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  perfilItem: {
    padding: 10,
    backgroundColor: '#6A5ACD',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  perfilText: {
    fontSize: 18,
    color: '#000',
  },
  categoryText: {
    fontSize: 18,
    color: '#555',
  },
});

export default Home;

