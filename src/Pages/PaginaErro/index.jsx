import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";

export default function PaginaErro() {
    return (
        <>
        <Navbar />
        <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">Ops! Página não encontrada</p>
          <p className="lead">
            A página que você está procurando não existe.
          </p>
          <Link to={`/`} className="btn btn-primary">
            Ir para Home
          </Link>
        </div>
      </div>
      </>
    )
}