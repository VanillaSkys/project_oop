import { Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
// import Error_404 from "./pages/_error/Error_404"
import { createContext, useState } from "react"
import Landing from "./pages/LandingPage"
import MenuPage from "./pages/MenuPage"
import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage"
import RegistPage from "./pages/Register"
import CartoonPage from "./pages/CartoonPage"
import AdminPage from "./pages/AdminPage"
import ChapterPage from "./pages/ChapterPage"
const ThemeContext = createContext()
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system")
  return (
    <main>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Routes>
          {/* public routes */}
            <Route index element={<Landing />}/>
            <Route path="/:category" element={<Home />}/>
            <Route path="/menu" element={<MenuPage />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistPage/>} />
            <Route path="/cartoon" element={<CartoonPage/>}/>
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="/chapter" element={<ChapterPage/>} />
        </Routes>
      </ThemeContext.Provider>
    </main>
  )
}
export {ThemeContext}
export default App
