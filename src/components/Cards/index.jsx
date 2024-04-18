import Desenho from "./assets/girassol.png";
import Duca from "./assets/duca.png";
import Programacao from "./assets/teclas.png";
import Veganismo from "./assets/veganismo.png";
import Violao from "./assets/violao.png";
import VidaAcademica from "./assets/vidaAcademica.png";

export default function Cards(){
    return (
<div class="cartoes container row mx-auto g-4">

        <div class="col-12 col-md-6 col-xl-4 pb-4">
            <div class="card text-center ">
                <img class="img-fluid img-card" src={Programacao} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Programação</h5>
                    <p class="text-center">Minha história com a programação.</p>
                    <a href="#" class="btn btn-primary">Clique aqui!</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4">
            <div class="card text-center">
                <img class="img-fluid img-card" src={VidaAcademica} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Vida Acadêmica</h5>
                    <p class="text-center">Minha história com a vida acadêmica.</p>
                    <a href="#" class="btn btn-primary">Clique aqui!</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4">
            <div class="card text-center ">
                <img class="img-fluid img-card" src={Desenho} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Desenho</h5>
                    <p class="text-center">Minha história com o desenho.</p>
                    <a href="#" class="btn btn-primary">Clique aqui!</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4">
            <div class="card text-center ">
                <img class="img-fluid img-card" src={Veganismo} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Veganismo</h5>
                    <p class="text-center">Minha história com o veganismo.</p>
                    <a href="#" class="btn btn-primary">Clique aqui!</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4">
            <div class="card text-center ">
                <img class="img-fluid img-card" src={Duca} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Duca</h5>
                    <p class="text-center">Minha história com a Duquinha.</p>
                    <a href="#" class="btn btn-primary">Clique aqui!</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4">
            <div class="card text-center ">
                <img class="img-fluid img-card" src={Violao} alt=""/>
                <div class="card-header ">
                    <h5 class="text-center">Violão</h5>
                    <p class="text-center">Minha história com o violão.</p>
                    <a href="#" class="btn btn-primary">Clique aqui!</a>
                </div>
            </div>
        </div>
    </div>
)
}