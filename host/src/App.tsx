import React, { useState } from "react"

const Button = React.lazy(() => import("ButtonApp/Button"))
const Header = React.lazy(() => import("HeaderApp/Header"))
// const App2 = React.lazy(() => import("HostApp/App"))

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
          {/* <App2 /> */}
        </React.Suspense>
      </header>
    </div>
  )
}

export default App
