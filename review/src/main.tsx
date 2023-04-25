//https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis

import App from "./App"
import { ApolloProvider } from "@apollo/client"
import { client } from "./graphql/client"
import { createRoot } from "react-dom/client"

const container = document.getElementById("app")

const root = createRoot(container!) // createRoot(container!) if you use TypeScript

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
