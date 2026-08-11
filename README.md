# Minha Loja Online

Site simples de vendas com catálogo de produtos, carrinho de compras e
checkout via **Mercado Pago** (aceita Pix, cartão de crédito, débito e
boleto automaticamente).

## O que já vem pronto

- `index.html` – página inicial com a vitrine de produtos
- `carrinho.html` – carrinho de compras
- `sucesso.html`, `pendente.html`, `falha.html` – páginas de retorno do pagamento
- `js/produtos.js` – **lista de produtos** (é aqui que você edita nome, preço, foto e descrição)
- `js/carrinho.js`, `js/catalogo.js`, `js/pagina-carrinho.js` – lógica do site
- `css/style.css` – visual do site
- `api/criar-preferencia.js` – função que gera o link de pagamento no Mercado Pago
- `api/webhook.js` – endpoint opcional para automatizar confirmações de pagamento no futuro

## Passo 1 — Coloque seus produtos de verdade

Abra `js/produtos.js` e edite a lista `PRODUTOS`. Para cada produto, preencha:

```js
{
  id: "prod-001",          // código único, não repita
  nome: "Nome do produto",
  preco: 49.90,             // use ponto, não vírgula
  imagem: "img/minha-foto.jpg",
  descricao: "Descrição curta",
  estoque: 20                // opcional, só informativo por enquanto
}
```

Coloque as fotos reais na pasta `img/` (formatos JPG, PNG ou WEBP funcionam bem;
recomendo fotos quadradas, por volta de 800x800px, para não pesar o site).

## Passo 2 — Crie sua conta no Mercado Pago

1. Crie (ou use) uma conta em https://www.mercadopago.com.br
2. Acesse o **Painel do Desenvolvedor**: https://www.mercadopago.com.br/developers/panel/app
3. Crie uma aplicação (qualquer nome serve).
4. Copie o **Access Token de produção** (para receber pagamentos reais) —
   ou use o **Access Token de teste** primeiro, para testar sem dinheiro de verdade.

## Passo 3 — Publicar o site (recomendado: Vercel, gratuito)

Você não precisa saber programar para publicar. Siga:

1. Crie uma conta gratuita em https://vercel.com (dá para entrar com GitHub, Google etc.)
2. Suba esta pasta (`loja-online`) para um repositório no GitHub
   *(ou, mais simples: instale o [Vercel CLI](https://vercel.com/docs/cli) e rode `vercel` dentro desta pasta pelo terminal)*.
3. No painel da Vercel, importe o projeto.
4. Em **Settings → Environment Variables**, adicione:
   - Nome: `MP_ACCESS_TOKEN`
   - Valor: o Access Token que você copiou no Passo 2
5. Clique em **Deploy**. Em poucos segundos você recebe uma URL tipo
   `https://minha-loja.vercel.app` — seu site já está no ar.

> Por que Vercel? Este site usa uma "função serverless" (`api/criar-preferencia.js`)
> para falar com o Mercado Pago com segurança (o Access Token nunca fica exposto
> no navegador do cliente). A Vercel roda esse tipo de função automaticamente e
> tem plano gratuito. Netlify também funciona com pequenos ajustes, se preferir.

## Passo 4 — Teste antes de divulgar

1. Acesse seu site publicado.
2. Adicione um produto ao carrinho e clique em **Finalizar compra**.
3. Você será redirecionado para a página de pagamento do Mercado Pago.
   Se estiver usando o Access Token de **teste**, use os
   [cartões de teste do Mercado Pago](https://www.mercadopago.com.br/developers/pt/docs/checkout-pro/additional-content/your-integrations/test/cards)
   para simular uma compra.
4. Depois de confirmar que tudo funciona, troque para o Access Token de
   **produção** nas variáveis de ambiente da Vercel e faça o deploy de novo.

## Domínio próprio (opcional)

Depois de publicado, você pode comprar um domínio (ex: `minhaloja.com.br`,
geralmente na Registro.br) e conectá-lo ao site direto no painel da Vercel,
em **Settings → Domains**.

## Testando no seu computador (opcional, para quem quiser mexer no código)

```bash
npm install -g vercel
cd loja-online
vercel dev
```

Isso sobe o site localmente já com a função de pagamento funcionando
(peça para a Vercel usar suas variáveis de ambiente quando perguntado).

## Próximos passos (quando a loja crescer)

- **Controle de estoque automático**: hoje o campo `estoque` é só informativo.
  Para descontar de verdade a cada venda, o próximo passo é ligar o site a um
  banco de dados (ex: Supabase, Firebase) e usar o `api/webhook.js` para dar
  baixa quando o Mercado Pago confirmar o pagamento.
- **Cálculo de frete**: hoje o site não calcula frete. Dá para integrar com
  a API dos Correios ou de transportadoras quando fizer sentido para o seu volume de vendas.
- **E-mail de confirmação automático**: pode ser adicionado no `api/webhook.js`
  usando um serviço como Resend ou SendGrid.

Qualquer uma dessas melhorias, é só pedir que a gente implementa juntos.
