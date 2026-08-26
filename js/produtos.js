/**
 * LISTA DE PRODUTOS
 * ------------------
 * Edite este arquivo para colocar os seus óculos de verdade (os que vier
 * escolher no fornecedor de dropshipping).
 * Cada produto precisa de:
 *   id        -> um código único (não repita entre produtos)
 *   nome      -> nome do produto
 *   preco     -> preço em reais, usando ponto para centavos (ex: 89.90)
 *   imagem    -> caminho da imagem (coloque os arquivos na pasta /img)
 *   descricao -> texto curto explicando o produto
 *   estoque   -> quantidade disponível (opcional, deixe 999 se não for controlar)
 */

const PRODUTOS = [
  {
    id: "prod-001",
    nome: "Óculos Aviador Clássico",
    preco: 89.90,
    imagem: "img/oculos-aviador.svg",
    descricao: "Lentes espelhadas e armação leve, com proteção UV400.",
    estoque: 30
  },
  {
    id: "prod-002",
    nome: "Óculos Redondo Retrô",
    preco: 79.90,
    imagem: "img/oculos-redondo.svg",
    descricao: "Visual vintage, ideal pra quem gosta de um estilo diferente.",
    estoque: 30
  },
  {
    id: "prod-003",
    nome: "Óculos Esportivo Polarizado",
    preco: 99.90,
    imagem: "img/oculos-esportivo.svg",
    descricao: "Armação envolvente, ótimo pra praia, corrida e dia a dia.",
    estoque: 30
  },
  {
    id: "prod-004",
    nome: "Óculos Gatinho Fashion",
    preco: 84.90,
    imagem: "img/oculos-gatinho.svg",
    descricao: "Formato gatinho estiloso, com acabamento premium.",
    estoque: 30
  }
];
