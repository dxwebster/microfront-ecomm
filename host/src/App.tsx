import React, { useState } from "react"

const Button = React.lazy(() => import("remoteApp1/Button"))
const Header = React.lazy(() => import("remoteApp2/Header"))
// const BookList = React.lazy(() => import("remoteApp3/BookList"))

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>App vite-react TS</p>

        <button type="button" onClick={() => setCount(count => count + 1)}>
          Botão vite-react TS: {count}
        </button>

        <React.Suspense fallback="Loading App...">
          <Header />
          <Button />
        </React.Suspense>
      </header>
    </div>
  )
}

export default App
