import { View, Text, StyleSheet, Image } from 'react-native';

const Perfil = () => {
  const usuario = {
    nome: 'Rafael .P',
    email: 'csrafa4@gmail.com',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQHnypdIipYRpQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675143319659?e=1740009600&v=beta&t=8dW1tKci5CJ8tOYgQIAJeyjIoGZ7wjER1ilON7y625M', 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: usuario.foto }} style={styles.fotoPerfil} />
        <Text style={styles.nome}>{usuario.nome}</Text>
        <Text style={styles.email}>{usuario.email}</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações do Perfil</Text>
        <Text style={styles.infoText}>Nome: {usuario.nome}</Text>
        <Text style={styles.infoText}>E-mail: {usuario.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  fotoPerfil: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default Perfil;
