import { Link } from "react-router-dom";
import BotaoToggler from "../BotaoToggler";

export default function Navbar() {
    return (
        <header>
        <nav class="navbar navbar-expand-md bg-body-tertiary">
            <div class="container-fluid ">
                {/* <a class="navbar-brand" href="#">Menu</a> */}
                <BotaoToggler />
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item ">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/sobremim">Sobre mim</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </header>

    )
}