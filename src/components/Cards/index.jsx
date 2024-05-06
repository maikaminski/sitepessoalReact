import Desenho from "./assets/girassol.png";
import Duca from "./assets/duca.png";
import Programacao from "./assets/teclas.png";
import Veganismo from "./assets/veganismo.png";
import Violao from "./assets/violao.png";
import VidaAcademica from "./assets/vidaAcademica.png";
import BotaoCards from "../BotaoCards";

export default function Cards(){
    return (
<div class="container row mx-auto g-4 m-5">

        <div class="col-12 col-md-6 col-xl-4 pb-4 cartoes">
            <div class="card text-center">
                <img class="img-card" src={Programacao} alt=""/>
                <div class="card-header ">
                    <h5 class="text-center">Programação</h5>
                    <p class="text-center">Minha história com a programação.</p>
                    <BotaoCards />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4 cartoes">
            <div class="card text-center">
                <img class="img-card" src={VidaAcademica} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Vida Acadêmica</h5>
                    <p class="text-center">Minha história com a vida acadêmica.</p>
                    <BotaoCards />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4 cartoes" >
            <div class="card text-center">
                <img class="img-card" src={Desenho} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Desenho</h5>
                    <p class="text-center">Minha história com o desenho.</p>
                    <BotaoCards />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4 cartoes" >
            <div class="card text-center">
                <img class="img-card" src={Veganismo} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Veganismo</h5>
                    <p class="text-center">Minha história com o veganismo.</p>
                    <BotaoCards />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4 cartoes" >
            <div class="card text-center">
                <img class="img-card" src={Duca} alt=""/>
                <div class="card-header">
                    <h5 class="text-center">Duca</h5>
                    <p class="text-center">Minha história com a Duquinha.</p>
                    <BotaoCards />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-xl-4 pb-4 cartoes" >
            <div class="card text-center">
                <img class="img-card" src={Violao} alt=""/>
                <div class="card-header ">
                    <h5 class="text-center">Violão</h5>
                    <p class="text-center">Minha história com o violão.</p>
                    <BotaoCards />
                </div>
            </div>
        </div>
    </div>
)
}