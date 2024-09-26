import Banner from "../../components/Banner";
import Navbar from "../../components/NavBar";
import RedesSociais from "../../components/RedesSociais";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";

export default function VidaAcademica() {
    return (
        <>
        <Navbar />
        <div className=" text-center fs-5 fundo text-light">
        <Banner />
        <Titulo>Como eu comecei a faculdade de História e acabei em um Doutorado</Titulo>
            <p></p>
            <p></p>
            <p></p>
            </div>
        
        <RedesSociais />
        <Rodape />
        </>
    )
}