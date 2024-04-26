import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";

export default function PaginaErro() {
    return (
        <>
        <Navbar />
        <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">Ops! Página não encontrada</p>
          <p class="lead">
            A página que você está procurando não existe.
          </p>
          <Link to={`/`} class="btn btn-primary">
            Ir para Home
          </Link>
        </div>
      </div>
      </>
    )
}