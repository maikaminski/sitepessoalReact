import { Link } from "react-router-dom";
import BotaoToggler from "../BotaoToggler";

export default function Navbar() {
    return (
        <header>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid ">
                {/* <a className="navbar-brand" href="#">Menu</a> */}
                <BotaoToggler />
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item ">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobremim">Sobre mim</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </header>

    )
}