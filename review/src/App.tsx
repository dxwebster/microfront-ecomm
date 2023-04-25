import { useQuery, gql } from "@apollo/client"
import BookList from "./components/BookList"

const BOOKS_QUERY = gql`
  query books {
    books {
      id
      title
      author
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(BOOKS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="App">
      <h1>My Book List</h1>
      <BookList books={data.books} />
    </div>
  )
}

export default App
