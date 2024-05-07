import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import Titulo from "../Titulo";

export default function RedesSociais() {
    return (
        <section class="redes p-5">
            <Titulo>Redes Sociais</Titulo>
            <div class="d-flex flex-column gap-3 flex-lg-row align-items-center justify-content-center">
                <div class="div_redes text-center fs-5">
                    <BsLinkedin />
                    <a href="https://www.linkedin.com/in/maikaminski/"
                        class="ms-2 text-decoration-none text-reset">LinkedIn </a>

                </div>
                <div class="div_redes text-center fs-5">
                    <BsGithub />
                    <a href="https://github.com/maikaminski" 
                        class="ms-2 text-decoration-none text-reset">GitHub</a>

                </div>
                <div class="div_redes text-center fs-5">
                    <BsInstagram />
                    <a href="https://www.instagram.com/maikaminski/"
                        class="ms-2 mt-2 text-decoration-none text-reset">Instagram</a>

                </div>
            </div>
        </section>
    )
}