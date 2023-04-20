# Módulo - Review de Produtos

## Como rodar o projeto

- instala dependências: `npm install`

- Inicia o mongodb-community: `brew services start mongodb-community`

- Roda o servidor: `npm run server`

- Roda o front: `npm run dev`

- **Conecta no banco pela extensão MongoDB for VSCode, clicando com botão direito e conectar na conection configurada: localhost:27017**

### Como criar esse projeto do zero

npm create vite@latest

### Instala dependências:

- `npm install apollo-server`
- `npm install @apollo/client`
- `npm install graphql`
- `npm install mongoose`
- `npm install @types/mongodb`
- `npm install nodemon`

### Configura nodemon

Cria arquivo nodemon.json na raíz

```json
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node ./server/index.ts"
}
```
Adiciona script no package.json

- `"server": "nodemon --watch"`

### Instala pacote para rodar Mongo DB local

- `brew tap mongodb/brew`
- `brew install mongodb-community`

### Instala a extensão MongoDB for VSCode

Acessa a extensão no menu lateral, clica em Add Conection.
Coloque localhost como user e 27017 na porta.