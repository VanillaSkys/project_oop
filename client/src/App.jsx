import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error_404 from "./pages/_error/Error_404"
// import ErrorLayout from "./_error/ErrorLayout"
// import { Error_404 } from "./_error/pages"


function App() {
  return (
    <main>
      <Routes>
        {/* private routes */}
          <Route index element={<Home />}/>
          <Route path="*" element={<Error_404 />} />
      </Routes>
    </main>
  )
}

export default App
