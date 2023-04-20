import { gql } from "apollo-server"

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    getBooks: [Book!]!
  }

  input BookInput {
    title: String!
    author: String!
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    addBookList(books: [BookInput!]!): [Book!]!
    updateBook(id: ID!, title: String, author: String): Book!
    deleteBook(id: ID!): String
    deleteBookList(ids: [ID!]!): String
  }
`
