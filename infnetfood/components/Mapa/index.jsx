import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RestaurantesMapa = () => {
  const restaurantes = [
    { id: 1, nome: 'Restaurante A', latitude: -22.9083, longitude: -43.1964, endereco: 'Rua X, Centro' },
    { id: 2, nome: 'Restaurante B', latitude: -22.9075, longitude: -43.1950, endereco: 'Rua Y, Centro' },
    { id: 3, nome: 'Restaurante C', latitude: -22.9090, longitude: -43.1975, endereco: 'Rua Z, Centro' },
    { id: 4, nome: 'Restaurante D', latitude: -22.9100, longitude: -43.1980, endereco: 'Rua W, Centro' },
    { id: 5, nome: 'Restaurante E', latitude: -22.9110, longitude: -43.1990, endereco: 'Rua V, Centro' },
    { id: 6, nome: 'Restaurante F', latitude: -22.9120, longitude: -43.2000, endereco: 'Rua U, Centro' },
    { id: 7, nome: 'Restaurante G', latitude: -22.9130, longitude: -43.2010, endereco: 'Rua T, Centro' },
    { id: 8, nome: 'Restaurante H', latitude: -22.9140, longitude: -43.2020, endereco: 'Rua S, Centro' },
    { id: 9, nome: 'Restaurante I', latitude: -22.9150, longitude: -43.2030, endereco: 'Rua R, Centro' },
    { id: 10, nome: 'Restaurante J', latitude: -22.9160, longitude: -43.2040, endereco: 'Rua Q, Centro' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurantes no Centro do Rio de Janeiro</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -22.9083,
          longitude: -43.1964,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {restaurantes.map((restaurante) => (
          <Marker
            key={restaurante.id}
            coordinate={{
              latitude: restaurante.latitude,
              longitude: restaurante.longitude,
            }}
            title={restaurante.nome}
            description={restaurante.endereco}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,  
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    paddingHorizontal: 20, 
  },
  map: {
    flex: 1,  
    width: '100%',  
    height: '100%', 
  },
});

export default RestaurantesMapa;

