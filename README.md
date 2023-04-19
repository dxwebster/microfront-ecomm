Arquitetura Ecommerce - Monorepo microfrontend
===============================================

Tecnologias
===========

### [Monorepo](https://lerna.js.org/) com Lerna.js

O Monorepo é uma técnica de desenvolvimento que consiste em manter vários projetos dentro de um mesmo repositório. No projeto em questão, foi utilizado o Lerna.js como ferramenta de gerenciamento de pacotes e modularidade do código.

### [Module Federation](https://webpack.js.org/concepts/module-federation/)

O Module Federation é uma técnica de desenvolvimento que permite compartilhar módulos entre diferentes aplicações. Isso permitirá que você compartilhe componentes e bibliotecas entre os diferentes projetos e reduza a duplicação de código.

### CI/CD com Github Actions e Vercel

Ambas as ferramentas são muito poderosas e oferecem uma maneira fácil de automatizar o processo de implantação. Isso ajudará a garantir que as alterações no código sejam testadas e implantadas rapidamente.

### Observabilidade com New Relic

Ter uma boa observabilidade é essencial para garantir que o site esteja funcionando corretamente e identificar possíveis problemas antes que eles se tornem críticos. New Relic é uma escolha sólida para esse fim.

### Testes unitários: Jest

O Jest é um framework de testes de código aberto criado pelo Facebook e otimizado para testes de front-end. Ele fornece uma experiência de teste integrada e simplificada e possui recursos avançados, como suporte a snapshots, testes de cobertura e execução paralela de testes.

* * * * *

1- Página principal + Loja
==========================

### ReactJS + Typescript
É uma boa escolha, já que React é uma biblioteca popular e bem estabelecida e Typescript ajudará a evitar erros comuns de digitação e a aumentar a escalabilidade do código.

### Context API
permite o compartilhamento de estados entre vários componentes sem a necessidade de passar props manualmente. É uma maneira mais simples e escalável de gerenciar estados em componentes.

### [Tailwind](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
Ambas as bibliotecas são ótimas para acelerar o processo de design e desenvolvimento e deixando mais os estilos mais consistentes. Tailwind é particularmente útil para desenvolvimento rápido de protótipos, enquanto Radix UI oferece componentes de alta qualidade e personalizáveis.

### [Prismic](https://prismic.io/) como CMS
Prismic é uma opção popular e sólida para gerenciamento de conteúdo, permitindo que você crie e gerencie facilmente o conteúdo do seu site. É mais adequado para gerenciar o conteúdo do seu site, como textos, imagens e outros ativos de mídia e também fornece uma API REST para recuperar dados do CMS.

### REST API
É uma arquitetura de API amplamente utilizada que utiliza operações HTTP (GET, POST, PUT, DELETE) para transferir dados. É simples e escalável.

### SSR e roteamento usando Next.js 13
Next.js é uma ótima escolha para desenvolvimento de ecommerce, pois permite o SSR, roteamento fácil e outras funcionalidades importantes para o desenvolvimento de um site de comércio eletrônico.

* * * * *

2- Carrinho + Checkout
==========================

### ReactJS + Typescript
React é uma biblioteca popular e bem estabelecida e Typescript ajudará a evitar erros comuns de digitação e a aumentar a escalabilidade do código.

### Zustand
É uma biblioteca de gerenciamento de estado leve e fácil de usar que pode ser uma boa escolha para gerenciar o estado do carrinho.

### Chakra UI
É uma biblioteca de componentes visualmente atraente e altamente personalizável que pode ser útil para o desenvolvimento de checkout.

### React-Router
Com o React Router, você pode facilmente integrar o módulo de carrinho com outros módulos da sua aplicação, como a página principal e a página de checkout, permitindo que os usuários naveguem de forma contínua pela sua loja virtual.

* * * * *

3- Conta
==========================


### ReactJS + Typescript
React é uma biblioteca popular e bem estabelecida e Typescript ajudará a evitar erros comuns de digitação e a aumentar a escalabilidade do código.

### Oauth para autenticação
É um protocolo de autorização que permite que aplicativos acessem informações de contas de usuários sem a necessidade de obter suas credenciais de login e senhas, tornando o processo de login mais fácil e conveniente para os usuários pois melhora segurança e privacidade.

### Remix para SSR
Melhora a velocidade de carregamento da página para trazer os dados de usuário.

### Vanilla-Extract
É uma biblioteca de estilo que permite escrever estilos em CSS com JavaScript e usar CSS-in-JS sem o custo extra de abstração. Ele oferece uma sintaxe intuitiva, autogeração de nomes de classes, tipagem estática e muito mais.

### React-Router
É uma biblioteca popular para gerenciamento de rotas em aplicativos React. Usar React-Router no minha-conta pode fornecer uma experiência de usuário mais fluida, permitindo que os usuários naveguem facilmente entre diferentes páginas e recursos.

* * * * *

4- Review de produtos
==========================

### ReactJS + Typescript
React é uma biblioteca popular e bem estabelecida e Typescript ajudará a evitar erros comuns de digitação e a aumentar a escalabilidade do código.

### GraphQL para a API
Em vez de usar REST, você pode optar por usar GraphQL para sua API. GraphQL é uma linguagem de consulta para suas APIs e oferece muitas vantagens em relação ao REST, como a capacidade de buscar apenas os dados necessários, reduzir o número de solicitações de rede e melhorar o desempenho geral.

### Apollo Client para gerenciamento de estado
O Apollo Client é uma biblioteca de gerenciamento de estado que funciona bem com o GraphQL. Ele pode ser usado para gerenciar o estado do carrinho, autenticação de usuários e outras funcionalidades importantes.

### Apollo Server para um BFF (Backend for Frontend)
O Apollo Server é uma biblioteca GraphQL para criação de servidores, permitindo criar um servidor GraphQL para atender às necessidades específicas do front-end, ter mais controle sobre a API GraphQL, permitindo a criação de resolvers personalizados e outras funcionalidades importantes.

### [Tailwind](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
Ambas as bibliotecas são ótimas para acelerar o processo de design e desenvolvimento e deixando mais os estilos mais consistentes. Tailwind é particularmente útil para desenvolvimento rápido de protótipos, enquanto Radix UI oferece componentes de alta qualidade e personalizáveis.

### MongoDB como Banco de dados não relacional
O MongoDB é uma opção popular para armazenamento de dados devido à sua escalabilidade e flexibilidade. Para armazenar avaliações de produtos, seria melhor usar um banco de dados dedicado, como o MongoDB ou outro banco de dados não relacional. Isso permitirá que você armazene as avaliações com eficiência e obtenha um bom desempenho ao recuperá-las.

* * * * *

Features
========

### 1.  Página principal + Loja:

-   Banners com promoções e ofertas: exibe banners promocionais ou de oferta para atrair a atenção do cliente.
-   Últimos itens visualizados: mostra os últimos produtos visualizados pelo usuário.
-   Vitrine de produtos: exibe uma lista de produtos selecionados, geralmente com base em uma categoria ou promoção específica.
-   Detalhes do produto: exibe informações detalhadas sobre um produto específico, como descrição, preço, imagens, comentários, etc.

### 2.  Carrinho + Checkout:

-   Gerenciar carrinho (ajustar quantidade): permite ao usuário adicionar ou remover produtos do carrinho e ajustar a quantidade de cada item.
-   Ver valores dos itens da compra: exibe o valor total dos itens do carrinho, além de outros detalhes como frete, impostos, etc.
-   Incluir cupom de desconto: possibilidade de aplicar um código de desconto para reduzir o valor da compra.
-   Endereço de entrega: opção de cadastrar um endereço de entrega para receber os produtos adquiridos.
-   Dados do pagamento: área que permite inserir as informações de pagamento, como número do cartão, data de expiração, código de segurança, etc.
-   Finalizar pagamento: botão que finaliza o processo de compra e gera a transação financeira.

### 3.  Conta:

-   Login e cadastro de usuário: permite aos usuários criar uma conta ou fazer login com uma conta existente.
-   Gestão de dados do usuário: possibilidade de visualizar e editar informações pessoais do usuário, como nome, endereço de e-mail, endereço de entrega, etc.
-   Sign Out: permite ao usuário encerrar a sessão e sair da conta.

### 4.  Review de produtos:

-   Adicionar avaliações: permite aos usuários adicionarem avaliações para produtos específicos, incluindo a capacidade de adicionar uma classificação, um título e um texto explicando sua experiência com o produto.
-   Classificação média do produto: calcula automaticamente a classificação média do produto com base em todas as avaliações recebidas.
-   Filtros de avaliação: permite que os usuários filtrem avaliações por classificação, data, relevância, etc. Isso pode ajudar os usuários a encontrar avaliações que sejam mais úteis para eles.
-   Alertas de novas avaliações: envia alertas para os usuários quando uma nova avaliação é adicionada a um produto que eles já avaliaram ou comentaram.
