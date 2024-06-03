import Titulo from "../Titulo";
import RedesSociaisLinks from "./RedesSociaisLinks";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

const linksRedes = [
    { name: "Linkedin", path: "https://www.linkedin.com/in/maikaminski/" },
    { name: "GitHub", path: "https://github.com/maikaminski" },
    { name: "Instagram", path: "https://www.instagram.com/maikaminski/" },
];
const icons =[ linkedin, github, instagram ]

export default function RedesSociais() {
    return (
        <section className="redes p-5">
            <Titulo>Redes Sociais</Titulo>
            <div className="d-flex gap-3 flex-lg-row align-items-center justify-content-center ">
                <div className="d-flex div_redes text-center fs-5">
                    <ul className="icones">
                        {icons.map((icon) => (
                        <li><img className="icone" src={icon}></img></li>
                    ))}
                    </ul>
                    <ul>
                        <li className="links">{linksRedes.map((link) => (
                        <RedesSociaisLinks key={link.path} link={link} />
                    ))}</li>
                    </ul>

                    {/* d-flex flex-column gap-3 flex-lg-row align-items-center justify-content-center*/}
               
                </div>
            </div>
        </section>
    )
}