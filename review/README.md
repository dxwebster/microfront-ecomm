
### Cria projeto com vite

npm create vite@latest

## Instala dependências:

`npm install apollo-server`
`npm install @apollo/client`
`npm install graphql`
`npm install mongoose`
`npm install @types/mongodb`

### Instala e configura nodemon

`npm install nodemon`

```json
// nodemon.json
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["src/**/*.spec.ts"],
  "exec": "ts-node ./server/index.ts"
}
```

### Instala pacote para rodar Mongo DB local

`brew tap mongodb/brew`
`brew install mongodb-community`

### Adiciona script no package.json

`"server": "nodemon --watch"`

### Roda o mongodb local

`brew services start mongodb-community`

### Roda o servidor

`npm run server`