export type Book = { id?: string; title: string; author: string }

// query
export type getBooksResponse = Book[] | string

// mutations
export type addBookArgs = { title: string; author: string }
export type addBookResponse = Book | string

export type updateBookArgs = { id: string; title?: string; author?: string }
export type updateBookResponse = { oldTitle: string; newTitle: string; oldAuthor: string; newAuthor: string } | string

export type deleteBookArgs = { id: string }
export type deleteBookResponse = string

export type addBookListArgs = { books: Book[] }
export type addBookListResponse = { message: string; newBooks: Book[] }

export type deleteBookListArgs = { ids: string[] }
export type deleteBookListResponse = string
