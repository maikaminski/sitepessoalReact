import Navbar from "../../components/NavBar";
import RedesSociais from "../../components/RedesSociais";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";
import duca1 from "../Duca/assets/duca1.jpeg"
import duca2 from "../Duca/assets/desenhoduca.jpeg"
import duca4 from "../Duca/assets/ducanene.jpg"
import duca5 from "../Duca/assets/duca5.jpeg"
import duca6 from "../Duca/assets/ducaepolenta.jpg"
import duca8 from "../Duca/assets/euduca.jpg"
import duca9 from "../Duca/assets/euducapolentanenes.jpg"
import duca10 from "../Duca/assets/eumaeduca.jpeg"

export default function Duca() {
    return (
        <>
        <Navbar />
        <Titulo>Como eu conheci a Duca, e como ela se tornou o grande amor da minha vida</Titulo>
        <div className="m-5 text-center fs-5">
            <h3>Como ela chegou:</h3>
            <p>Saída de um buraco, em meio à neve que caiu em Guarapuava/PR em 2013, magrela, zóiuda, sofrida... Esse pedacinho de amor sobrevivente, veio parar em nossa casa!</p>
            <img src={duca4} alt="" className="w-50 rounded mx-auto d-block mb-4 mb-4"/>
            <p>Sempre gostei muito de animais. Desde os considerados de estimação, como cães e gatos, até os de produção, como galinhas, vacas, porcos, e mesmo os sinantrópicos, como ratos, pombos e insetos, sempre receberam um olhar de respeito de carinho da minha parte. Toda a parte da minha vida compartilhada com a família, sempre contou com um animal de estimação, muito bem cuidados e amados, como membros da família mesmo.</p>
            <p>Antes da Duca, Sly, uma vira-lata com cara de pinscher, e Belinha, uma salsicha pretinha, eram nossas companheiras. Sly nos deixou no início de 2013, com 11 anos, e 4 meses depois, Belinha foi se juntar à ela, aos 9 anos. Foi um baque horrível, as duas acompanharam minha adolescência toda e início da vida adulta... Mas como amor nunca faltou em nossa casa, poucos meses depois, adotamos a Duca e a Polenta</p>
            <img src={duca9} alt="" className="w-50 rounded mx-auto d-block mb-4"/>
            <p>Infelizmente, a Polenta não se adaptou em casa, tinha uma energia de 15 labradores, apesar de ser uma gordinha chatuca... Então, um tempo depois ela foi morar na chácara, onde podia correr e liberar toda a energia que tinha acumulada.</p>
            <img src={duca6} alt="" className="w-50 rounded mx-auto d-block mb-4"/>
            <p>Depois disso, Duquinha se tornou a única rainha da casa. Com uma personalidade de uma senhora cansada de 65 anos, foi se tornando cada vez mais a paixão de nossas vidas. Calma, carinhosa, obediente, engraçada, quanto mais os anos passavam mais tínhamos certeza de que ela tava se tornando quase humana na convivência.</p>
            <img src={duca1} alt="" className="w-50 rounded mx-auto d-block mb-4"/>
            <p>Nunca foi de brincar com bolinhas, nem de roer as coisas da casa, late muito pouco, geralmente para o carteiro, o moço que leva o gás, os coletores de resíduos, porque enfim, alguma coisa de cachorro ela tinha que ter! Hahahaha! De resto, sua rotina mesmo é comer, subir no sofá, dormir embaixo da mesa, dar bom dia na cama e já aproveitar pra tirar um cochilo por ali mesmo... Mesmo, sendo a tranquilidade em cachorro, a gente vê vida nos olhos dela. Foi uma das minhas primeiras inspirações quando comecei a desenhar... Bonito não ficou, mas não da pra dizer que não ficou fofo né?</p>
            <img src={duca2} alt="" className="w-50 rounded mx-auto d-block mb-4"/>
            <p>Já faz 10 anos que saí de Guarapuava, e obviamente que minha mãe não deixou eu tirar a companheirinha dela de lá. Mesmo assim, cada visita que faço é como se eu nunca tivesse saído de perto dela. É uma festa quando eu chego, independente de quantas vezes eu saia de casa, e é minha companheira de sonecas no sofá, filmes, séries... é meu bom dia diário com lambeijos e carinho.
            </p>
            <img src={duca5} alt="" className="w-50 rounded mx-auto d-block mb-4"/>
            <p>Parecemos ser companheiras de outras vidas, porque o olhar que lançamos uma para a outra é de puro amor e cumplicidade. Se eu estou deitada, ela está sempre comigo, no maior dengo, encaixa no meu ombro e nos sentimos seguras.</p>
            <img src={duca8} alt="" className="w-50 rounded mx-auto d-block mb-4"/>
            <p>Minha vida seria, com certeza, muito menos doce sem a presença desse serzinho de luz. Sou muito grata por termos cruzado nossos caminhos, e eu prometo ser sempre uma companheira, como ela é pra mim. A parte mais dura da convivência com animais, é que a gente sabe que eles se vão antes que nós, mas como dizem, eles já nasceram sabendo amar, e vem para nos ensinar. Esse ano Duca completa 11 anos, se Deus quiser, ainda teremos muitos pela frente. Mas como eu acredito que não se deve economizar amor, eu prometo Duquinha, que assim que chegar o seu momento, eu adotarei outro serzinho e lhe darei todo amor, respeito e cuidade que dediquei à você. Pois sei que você ficará feliz de eu seguir aprendendo a amar como vocês!</p>
            <img src={duca10} alt="" className="w-50 rounded mx-auto d-block mb-4"/>
            

        </div>
        <RedesSociais />
        <Rodape />
        </>
    )
}