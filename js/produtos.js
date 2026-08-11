/**
 * LISTA DE PRODUTOS
 * ------------------
 * Edite este arquivo para colocar os seus produtos de verdade.
 * Cada produto precisa de:
 *   id        -> um código único (não repita entre produtos)
 *   nome      -> nome do produto
 *   preco     -> preço em reais, usando ponto para centavos (ex: 49.90)
 *   imagem    -> caminho da imagem (coloque os arquivos na pasta /img)
 *   descricao -> texto curto explicando o produto
 *   estoque   -> quantidade disponível (opcional, deixe 999 se não quiser controlar)
 */

const PRODUTOS = [
  {
    id: "prod-001",
    nome: "Caneca Personalizada",
    preco: 39.90,
    imagem: "img/produto-exemplo-1.svg",
    descricao: "Caneca de porcelana 300ml, ideal para presentear.",
    estoque: 25
  },
  {
    id: "prod-002",
    nome: "Camiseta Estampada",
    preco: 69.90,
    imagem: "img/produto-exemplo-2.svg",
    descricao: "100% algodão, disponível em vários tamanhos.",
    estoque: 40
  },
  {
    id: "prod-003",
    nome: "Ecobag de Lona",
    preco: 29.90,
    imagem: "img/produto-exemplo-3.svg",
    descricao: "Bolsa reforçada, ótima para compras do dia a dia.",
    estoque: 60
  },
  {
    id: "prod-004",
    nome: "Chaveiro Artesanal",
    preco: 14.90,
    imagem: "img/produto-exemplo-4.svg",
    descricao: "Feito à mão, peça única.",
    estoque: 100
  }
];
