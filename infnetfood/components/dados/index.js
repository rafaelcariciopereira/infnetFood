const restaurantes = [
  {
    nome: "Pizza da Casa",
    endereco: "Rua das Flores, 123 - Centro",
    horario: "18:00 às 23:00",
    telefone: "(11) 98765-4321",
    produtos: [
      { id: "pizza-da-casa-1", nome: "Pizza de Calabresa", preco: 39.90, categoria: "Massas" },
      { id: "pizza-da-casa-2", nome: "Pizza de Marguerita", preco: 42.90, categoria: "Massas" },
      { id: "pizza-da-casa-3", nome: "Pizza Quatro Queijos", preco: 45.90, categoria: "Massas" },
      { id: "pizza-da-casa-4", nome: "Pizza de Frango com Catupiry", preco: 44.90, categoria: "Massas" },
      { id: "pizza-da-casa-5", nome: "Refrigerante Lata", preco: 5.90, categoria: "Bebidas" },
    ],
  },
  {
    nome: "Sushi Premium",
    endereco: "Av. Japão, 456 - Bairro Oriental",
    horario: "12:00 às 22:00",
    telefone: "(11) 91234-5678",
    produtos: [
      { id: "sushi-premium-1", nome: "Combo Sushi Básico", preco: 55.00, categoria: "Pratos Principais" },
      { id: "sushi-premium-2", nome: "Temaki de Salmão", preco: 22.50, categoria: "Lanches" },
      { id: "sushi-premium-3", nome: "Sashimi de Atum (10 peças)", preco: 65.00, categoria: "Pratos Principais" },
      { id: "sushi-premium-4", nome: "Refrigerante Lata", preco: 5.90, categoria: "Bebidas" },
      { id: "sushi-premium-5", nome: "Mochi (Sobremesa Japonesa)", preco: 12.00, categoria: "Sobremesas" },
    ],
  },
  {
    nome: "Churrasco do Chef",
    endereco: "Estrada da Montanha, 789 - Fazenda Alegre",
    horario: "12:00 às 21:00",
    telefone: "(11) 99876-5432",
    produtos: [
      { id: "churrasco-do-chef-1", nome: "Espetinho de Carne", preco: 12.00, categoria: "Lanches" },
      { id: "churrasco-do-chef-2", nome: "Costela Assada", preco: 85.00, categoria: "Pratos Principais" },
      { id: "churrasco-do-chef-3", nome: "Porção de Linguiça", preco: 25.00, categoria: "Pratos Principais" },
      { id: "churrasco-do-chef-4", nome: "Refrigerante 2L", preco: 10.00, categoria: "Bebidas" },
      { id: "churrasco-do-chef-5", nome: "Pudim de Leite", preco: 10.00, categoria: "Sobremesas" },
    ],
  },
  {
    nome: "Café da Manhã Gourmet",
    endereco: "Praça da Luz, 321 - Centro Histórico",
    horario: "07:00 às 12:00",
    telefone: "(11) 93456-7890",
    produtos: [
      { id: "cafe-da-manha-gourmet-1", nome: "Café Expresso", preco: 5.00, categoria: "Bebidas" },
      { id: "cafe-da-manha-gourmet-2", nome: "Pão na Chapa", preco: 7.50, categoria: "Lanches" },
      { id: "cafe-da-manha-gourmet-3", nome: "Tapioca com Queijo", preco: 12.00, categoria: "Saudáveis" },
      { id: "cafe-da-manha-gourmet-4", nome: "Bolo de Cenoura com Cobertura", preco: 15.00, categoria: "Sobremesas" },
      { id: "cafe-da-manha-gourmet-5", nome: "Croissant com Presunto e Queijo", preco: 18.00, categoria: "Lanches" },
    ],
  },
  {
    nome: "Burger Mania",
    endereco: "Rua dos Lanches, 987 - Bairro Central",
    horario: "11:00 às 23:00",
    telefone: "(11) 97654-3210",
    produtos: [
      { id: "burger-mania-1", nome: "Cheeseburger", preco: 25.00, categoria: "Lanches" },
      { id: "burger-mania-2", nome: "Hambúrguer de Frango", preco: 22.00, categoria: "Lanches" },
      { id: "burger-mania-3", nome: "Combo Bacon Burger", preco: 35.00, categoria: "Lanches" },
      { id: "burger-mania-4", nome: "Batata Frita com Cheddar e Bacon", preco: 18.00, categoria: "Lanches" },
      { id: "burger-mania-5", nome: "Milkshake de Chocolate", preco: 15.00, categoria: "Bebidas" },
    ],
  },
  {
    nome: "Massas da Nonna",
    endereco: "Av. Itália, 222 - Bairro das Artes",
    horario: "11:30 às 22:00",
    telefone: "(11) 91234-5678",
    produtos: [
      { id: "massas-da-nonna-1", nome: "Lasanha à Bolonhesa", preco: 45.00, categoria: "Massas" },
      { id: "massas-da-nonna-2", nome: "Fettuccine Alfredo", preco: 40.00, categoria: "Massas" },
      { id: "massas-da-nonna-3", nome: "Nhoque com Molho de Tomate", preco: 38.00, categoria: "Massas" },
      { id: "massas-da-nonna-4", nome: "Ravioli de Queijo", preco: 42.00, categoria: "Massas" },
      { id: "massas-da-nonna-5", nome: "Tiramisu", preco: 25.00, categoria: "Sobremesas" },
    ],
  },
  {
    nome: "Tropical Açai",
    endereco: "Rua das Palmeiras, 654 - Zona Sul",
    horario: "10:00 às 20:00",
    telefone: "(11) 91234-1234",
    produtos: [
      { id: "tropical-acai-1", nome: "Açaí no Copo (500ml)", preco: 18.00, categoria: "Sobremesas" },
      { id: "tropical-acai-2", nome: "Açaí no Copo (700ml)", preco: 25.00, categoria: "Sobremesas" },
      { id: "tropical-acai-3", nome: "Tigela de Açaí com Frutas", preco: 28.00, categoria: "Sobremesas" },
      { id: "tropical-acai-4", nome: "Creme de Cupuaçu", preco: 22.00, categoria: "Sobremesas" },
      { id: "tropical-acai-5", nome: "Sorvete de Tapioca", preco: 12.00, categoria: "Sobremesas" },
    ],
  },
  {
    nome: "Veggie Delights",
    endereco: "Rua Verde, 789 - Jardim Botânico",
    horario: "11:00 às 21:00",
    telefone: "(11) 94567-8901",
    produtos: [
      { id: "veggie-delights-1", nome: "Salada de Quinoa", preco: 30.00, categoria: "Saudáveis" },
      { id: "veggie-delights-2", nome: "Hambúrguer Vegetariano", preco: 28.00, categoria: "Lanches" },
      { id: "veggie-delights-3", nome: "Wrap de Grão-de-Bico", preco: 25.00, categoria: "Saudáveis" },
      { id: "veggie-delights-4", nome: "Smoothie Verde", preco: 20.00, categoria: "Bebidas" },
      { id: "veggie-delights-5", nome: "Brownie Vegano", preco: 15.00, categoria: "Sobremesas" },
    ],
  },
];

export default restaurantes;

