import { ApolloServer } from "apollo-server"
import { typeDefs } from "./graphql/schema"
import { resolvers } from "./graphql/resolvers"
import { connectToDatabase } from "./db"

connectToDatabase()
  .then(() => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    })

    server.listen().then(({ url }) => {
      console.log(`🏆 Server ready at ${url}`)
    })
  })
  .catch(error => {
    console.log(`😢 ${error}`)
  })
