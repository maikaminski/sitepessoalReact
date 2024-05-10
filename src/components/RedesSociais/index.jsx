import Titulo from "../Titulo";
import RedesSociaisLinks from "./RedesSociaisLinks";

const linksRedes = [
    { name: "Linkedin", path: "https://www.linkedin.com/in/maikaminski/" },
    { name: "GitHub", path: "https://github.com/maikaminski" },
    { name: "Instagram", path: "https://www.instagram.com/maikaminski/" },
];

export default function RedesSociais() {
    return (
        <section className="redes p-5">
            <Titulo>Redes Sociais</Titulo>
            <div className="d-flex flex-column gap-3 flex-lg-row align-items-center justify-content-center">
                <div className="div_redes text-center fs-5">
                    {linksRedes.map((link) => (
                        <RedesSociaisLinks key={link.path} link={link} />
                    ))}

                </div>
            </div>
        </section>
    )
}