import { Link } from "react-router-dom";
import BotaoToggler from "../BotaoToggler";

export default function Navbar() {
    return (
        <header className="header">
        <nav className="navbar navbar-expand-md" >
            <div className="container-fluid ">
                {/* <a className="navbar-brand" href="#">Menu</a> */}
                
                <div className="collapse navbar-collapse" id="conteudoBarraNavegacao" >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active fs-5 text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-light dropdown-item" to="/sobremim">Sobre mim</Link>
                        </li>
                        
                    </ul>
                </div>
                <BotaoToggler />
            </div>
        </nav>
        </header>

    )
}