import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Checkout = ({ route }) => {
  const navigation = useNavigation()
  
  const { carrinho } = route.params;

  const [endereco, setEndereco] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);

  const calcularTotal = () => {
    return carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  };

  const validarFormulario = () => {
    if (!endereco || !metodoPagamento) {
      setIsFormValid(false);
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
      return false;
    }
    return true;
  };

  const finalizarPedido = () => {
    if (validarFormulario()) {
      Alert.alert('Pedido Finalizado', 'Seu pedido foi concluído com sucesso!');
      navigation.navigate("Home")
      setTimeout(() => {
      Alert.alert('Pedido Saindo!', 'Seu pedido esta pronto rapa!');
    }, 5000);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Revisar Pedido</Text>

      {carrinho.map((item) => (
        <View key={item.id}>
          <Text>{item.nome} x {item.quantidade}</Text>
          <Text>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
        </View>
      ))}
      <Text>Total: R$ {calcularTotal().toFixed(2)}</Text>

      <Text>Endereço de Entrega</Text>
      <TextInput
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Digite seu endereço"
        style={{ borderWidth: 1, padding: 5, marginVertical: 10 }}
      />

      <Text>Método de Pagamento</Text>
      <TextInput
        value={metodoPagamento}
        onChangeText={setMetodoPagamento}
        placeholder="Digite seu método de pagamento"
        style={{ borderWidth: 1, padding: 5, marginVertical: 10 }}
      />

      {!isFormValid && <Text style={{ color: 'red' }}>Todos os campos são obrigatórios!</Text>}

      <TouchableOpacity onPress={finalizarPedido}>
        <Text>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
