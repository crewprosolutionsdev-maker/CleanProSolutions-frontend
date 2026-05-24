import { BrowserRouter, Routes, Route } from "react-router-dom" 

import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import ContactPage from "./pages/ContactPage"
import AdminPage from "./pages/AdminPage"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
