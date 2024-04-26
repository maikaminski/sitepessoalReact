import Banner from "./components/Banner"
import Cards from "./components/Cards"
import Navbar from "./components/NavBar"
import RedesSociais from "./components/RedesSociais"
import Rodape from "./components/Rodape"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import SobreMim from "./Pages/SobreMim"
import PaginaErro from "./Pages/PaginaErro"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<PaginaErro />} />
      </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App
