import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Landing from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import CartoonPage from "./pages/CartoonPage";
import AdminPage from "./pages/AdminPage";
import ChapterPage from "./pages/ChapterPage";
import AdminChapterPage from "./pages/AdminChapterPage";
import PaymentPage from "./pages/PaymentPage";
import HistoryPages from "./pages/HistoryPage";

function App() {
  localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : localStorage.setItem("theme", "dark");
  return (
    <main>
      <Routes>
        {/* public routes */}
        <Route index element={<Landing />} />
        <Route path="/:category" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cartoon/:cartoon" element={<CartoonPage />} />
        <Route path="/cartoon/:cartoon/:chapter" element={<ChapterPage />} />
        {/* private routes */}
        {/* admin routes */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/cartoon/:cartoon" element={<AdminChapterPage />} />

        {/* user routes */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/history/:history" element={<HistoryPages />} />
      </Routes>
    </main>
  );
}

export default App;
