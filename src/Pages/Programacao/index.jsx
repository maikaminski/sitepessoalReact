import Navbar from "../../components/NavBar";
import RedesSociais from "../../components/RedesSociais";
import Rodape from "../../components/Rodape";
import Titulo from "../../components/Titulo";

export default function Programacao() {
    return (
        <>
            <Navbar />
            <div>
                <Titulo>Como eu conheci a programação, e como isso se tornou meu sonho de profissão</Titulo>
                <p>Em meados de 2022, eu conheci a Alura através de um influencer digital que estava divulgando uma imersão em Javascript gratuita para quem nunca tinha tido contato com programação. Naquele momento eu pensei, hum... Porque não? E me inscrevi.</p>
                <p>No início tudo parece grego, e você acha que nunca vai conseguir, mas os instrutores foram extremamente didáticos, e ver as coisas fazendo sentido e funcionando foi mágico pra mim. Foi como se minha cabeça tivesse explodido (emoji de cabeça explodindo). Nunca pensei que pudesse aprender alguma coisa nova, e que parecia tão distante, com mais de 30 anos de idade.</p>
                <p>Pouco tempo antes, eu tinha descoberto um TDAH não diagnosticado na infância, algo que me atrapalhou a vida inteira e eu não sabia porque. Nunca consegui sentar em frente aos livros e estudar por mais de 1 hora seguida. Mas também, em alguns momentos, eu entrava em um modo de hiperfoco que ficava fazendo a mesma coisa durante horas sem nem ver o tempo passar. Geralmente alguma coisa artística que me dava um prazer momentâneo. Porém, para quem conhece um pouco como o TDAH funciona, sabe que da mesma forma que o hiperfoco vem, ele vai. </p>
            </div>
            <RedesSociais />
            <Rodape />
        </>
    )
}