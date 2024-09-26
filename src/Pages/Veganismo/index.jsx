import Banner from "../../components/Banner";
import Navbar from "../../components/NavBar";
import RedesSociais from "../../components/RedesSociais";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";

export default function Veganismo() {
    return (
        <>
        <Navbar />
        <div className=" text-center fs-5 fundo text-light">
        <Banner />
        <Titulo>Como o veganismo entrou na minha vida e se tornou minha militância política principal</Titulo>
            <p>Eu conheci a primeira pessoa vegetariana aos 16 anos de idade. Até então, nem passava pela minha cabeça ser possível não se alimentar de produtos de origem animal.
                Apesar de sempre ter tido muita empatia e cuidado para com os animais, eu nunca associei os produtos que estavam disponíveis na mesa, com os animais que eu tanto tinha apreço. Além disso, acreditava que era tudo "natural", e que não existia a possibilidade de viver sem se alimentar de carne.
            </p>
            <p>Quando conheci a primeira pessoa vegetariana, e ela me explicou seus motivos, eu ainda fui relutante. Inventei todas as desculpas possíveis, critiquei, tentei justificar... Mas no final das contas, cada vez que eu conhecia mais sobre o movimento, mais eu sabia que era naquele lugar que eu deveria estar. Em 2008, já com 20 anos, comecei a namorar um vegetariano, e na convivência com ele, nas conversas que tínhamos, me conhecendo melhor e entendendo melhor as coisas pelas quais eu lutava, e no que eu acreditava, no dia 1º de janeiro de 2009 eu parei de consumir carne.</p>
            <p>Nessa época eu ainda não entendia muito bem o movimento político por trás dessa escolha, e demoraram alguns anos para que eu entendesse que precisava dar o próximo passo, visto que eu ainda consumia derivados de leite e ovos. Em 2016, depois de terminar o meu namoro, eu decidi que ia dar esse passo. E passei a cortar todos os produtos de origem animal que costumava consumir.</p>
            </div>
        
        <RedesSociais />
        <Rodape />
        </>
    )
}