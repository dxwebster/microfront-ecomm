import { Book } from "./BookList.type"

type BookListProps = {
  books: Book[]
}

function BookList({ books }: BookListProps) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          {book.title} by {book.author}
        </li>
      ))}
    </ul>
  )
}

export default BookList
