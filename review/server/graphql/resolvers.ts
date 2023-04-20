import { BookModel } from "../models/book"
import {
  addBookArgs,
  addBookListArgs,
  addBookListResponse,
  deleteBookArgs,
  updateBookArgs,
  updateBookResponse,
  deleteBookListArgs,
  addBookResponse,
  getBooksResponse,
  deleteBookResponse,
  deleteBookListResponse,
} from "../types"

export const resolvers = {
  Query: {
    getBooks: async (): Promise<getBooksResponse> => {
      try {
        const books = await BookModel.find()
        return books
      } catch (err) {
        return "Nenhum livro encontrado"
      }
    },
  },
  Mutation: {
    addBook: async (_: any, args: addBookArgs): Promise<addBookResponse> => {
      try {
        const newBook = new BookModel({
          title: args.title,
          author: args.author,
        })
        await newBook.save()
        return newBook
      } catch (err) {
        return `Erro ao tentar adicionar novo livro`
      }
    },
    updateBook: async (_: any, args: updateBookArgs): Promise<updateBookResponse> => {
      try {
        const book = await BookModel.findById(args.id)

        if (!book) {
          return `Livro com ID ${args.id} não existe`
        }

        const oldTitle = book.title
        const oldAuthor = book.author

        if (args.title) book.title = args.title
        if (args.author) book.author = args.author

        const updatedBook = await book.save()

        return {
          oldTitle,
          newTitle: updatedBook.title,
          oldAuthor,
          newAuthor: updatedBook.author,
        }
      } catch (err) {
        return `Erro ao tentar atualizar livro: ${err}`
      }
    },
    deleteBook: async (_: any, args: deleteBookArgs): Promise<deleteBookResponse> => {
      try {
        const book = await BookModel.findById(args.id)
        const deletedBook = await BookModel.findByIdAndDelete(args.id)

        if (!deletedBook || !book?.title) {
          return `Livro com ID ${args.id} não encontrado`
        }

        return `Livro "${book?.title}" com ID ${args.id} excluído com sucesso!`
      } catch (err) {
        return `Erro ao excluir livro com ID ${args.id}`
      }
    },

    addBookList: async (_: any, args: addBookListArgs): Promise<addBookListResponse> => {
      try {
        const newBooks = await BookModel.insertMany(args.books)
        return { message: `Lista de livros adicionada com sucesso!`, newBooks }
      } catch (err) {
        return { message: `Erro ao tentar adicionar lista de livros: ${err}`, newBooks: [] }
      }
    },
    deleteBookList: async (_: any, args: deleteBookListArgs): Promise<deleteBookListResponse> => {
      try {
        const books = await BookModel.find({ _id: { $in: args.ids } })

        const titles = books.map(book => book.title)

        const result = await BookModel.deleteMany({ _id: { $in: args.ids } })

        return `${result.deletedCount} livros excluídos com sucesso: ${titles.join(", ")}`
      } catch (err) {
        return `Erro ao excluir lista de livros com IDs ${args.ids}`
      }
    },
  },
}
