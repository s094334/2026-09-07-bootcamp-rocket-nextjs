import { Routes, Route } from "react-router";
import './App.css'
import Header from "./components/Header"
import CoworkingPage from './pages/CoworkingPage'
import RocketPage from "./pages/RocketPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="/coworking" element={<CoworkingPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
