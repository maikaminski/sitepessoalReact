import Banner from "../../components/Banner";
import Navbar from "../../components/NavBar";
import Rodape from "../../components/Rodape"
import Titulo from "../../components/Titulo";

export default function SobreMim() {
    return (
        <>
        <Navbar />
        <Banner />
        <section>
            <Titulo>Quem sou eu?</Titulo>
            <div>
                <p>Meu nome é Maíra Kaminski, tenho 35 anos, sou de Guarapuava, interior do Paraná. Aos 26 anos fui morar em Florianópolis em Santa Catarina para fazer mestrado, e desde então, nunca mais voltei para o interior. Atualmente moro em São Paulo capital, me adaptando à vida na selva de pedra!</p>
                <p>Sou formada e mestra em História, doutora Interdisciplinar em Ciências Humanas. Trabalhei com pesquisa desde a graduação, quando tive a oportunidade de começar uma iniciação científica, e assim foi até a conclusão do doutorado, no ano de 2023. Minhas pesquisas foram todas na área de História Ambiental, tema que tenho muito apreço, pois sou apaixonada pela ideia de interdisciplinariedade, e a pesquisa em história associada ao meio ambiente, isso se torna muito claro.</p>
                <p>Em 2022, conheci a Alura através de um influenciador digital. Na ocasião, a plataforma estava oferecendo uma imersão gratuita em Javascript, e eu pensei, porque não? Nunca imaginei que eu conseguiria um dia mexer em um código, mas naquele momento, eu percebi que sim, dava pra mudar de rumo na vida e aprender uma coisa nova que nunca me passou pela cabeça. E hoje estamos aqui! Criando a minha própria página em React do zero, apenas com conhecimentos adquiridos nos estudos desses quase 2 anos.</p>
                <p>Sou uma pessoa curiosa, criativa, cheia de energia e com uma verdadeira paixão pelo conhecimento. Gosto de aprender coisas novas, conhecer novos lugares e pessoas, sou comunicativa, as vezes até demais, hahaha...</p>
                <p>Acredito que a experiência acadêmica me proporcionou uma habilidade de pesquisa, de autodidatismo e de resolução de problemas que são essenciais para a área de tecnologia. A experiência como professora, me proporcionou aperfeiçoar as minhas softskills, como a escuta atenta, a capacidade de transmitir conhecimentos e ideias de forma clara e acessível, além de facilitar as relações interpessoais, tendo sempre uma boa relação, tanto com os alunos, quanto com a equipe pedagógica, resolvendo conflitos da melhor maneira possível.</p>
                
            </div>
        </section>

        <Rodape />
        </>
    )
}