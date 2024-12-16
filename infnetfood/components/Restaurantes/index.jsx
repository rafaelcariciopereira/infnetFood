import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import restaurantes from '../dados/index'; 

const Restaurantes = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurantes</Text>
      {restaurantes.map((restaurante, index) => (
        <View key={index} style={styles.restauranteContainer}>
          <Text style={styles.restauranteName}>{restaurante.nome}</Text>
          <Text><Text style={styles.bold}>Endereço:</Text> {restaurante.endereco}</Text>
          <Text><Text style={styles.bold}>Horário:</Text> {restaurante.horario}</Text>
          <Text><Text style={styles.bold}>Telefone:</Text> {restaurante.telefone}</Text>

          <Text style={styles.productTitle}>Produtos:</Text>
          <FlatList
            data={restaurante.produtos}
            keyExtractor={produto => produto.id}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Text style={styles.productName}>{item.nome}</Text>
                <Text style={styles.productPrice}>R${item.preco.toFixed(2)}</Text>
                <Text style={styles.productCategory}>Categoria: {item.categoria}</Text>
              </View>
            )}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  restauranteContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  restauranteName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productItem: {
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  productCategory: {
    fontSize: 14,
    color: '#555',
  },
});

export default Restaurantes;
