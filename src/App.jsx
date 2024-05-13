
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicio"
import SobreMim from "./Pages/SobreMim"
import PaginaErro from "./Pages/PaginaErro"
import Programacao from "./Pages/Programacao"
import VidaAcademica from "./Pages/VidaAcademica"
import Desenho from "./Pages/Desenho"
import Duca from "./Pages/Duca"
import Violao from "./Pages/Violao"
import Veganismo from "./Pages/Veganismo";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<PaginaErro />} />
        <Route path="programacao" element={<Programacao />} />
        <Route path="vidaacademica" element={<VidaAcademica />} />
        <Route path="desenho" element={<Desenho />} />
        <Route path="veganismo" element={<Veganismo />} />
        <Route path="duca" element={<Duca />} />
        <Route path="violao" element={<Violao />} />
      </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App
