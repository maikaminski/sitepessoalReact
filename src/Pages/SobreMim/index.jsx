import Banner from "../../components/Banner";
import Navbar from "../../components/NavBar";
import Rodape from "../../components/Rodape"
import Titulo from "../../components/Titulo";

export default function SobreMim() {
    return (
        <>
        <section className="fundo">
        <Navbar />
        <Banner />
        
            <Titulo>Quem sou eu?</Titulo>
            <div className="m-5 text-center fs-5 text-light">
                <p>Meu nome é <span className="fw-bold">Maíra Kaminski</span>, tenho 35 anos, sou de Guarapuava, interior do Paraná. Filha da <span className="fw-bold">dona Sonia</span>, neta da <span className="fw-bold">dona Adalgisa</span>, cresci cercada de mulheres fortes, que sempre arregaçaram as mangas pra fazer acontecer! Aos 26 anos fui morar em Florianópolis em Santa Catarina para fazer mestrado, e desde então, nunca mais voltei para o interior. Atualmente moro em São Paulo capital, me adaptando à vida na selva de pedra!</p>
                <p>Sou formada e mestra em História, doutora Interdisciplinar em Ciências Humanas. Trabalhei com pesquisa desde a graduação, quando tive a oportunidade de começar uma iniciação científica, e assim foi até a conclusão do doutorado, no ano de 2023. Minhas pesquisas foram todas na área de História Ambiental, tema que tenho muito apreço, pois sou apaixonada pela ideia de interdisciplinariedade, e na pesquisa em história associada ao meio ambiente, isso se torna muito claro.</p>
                <p>Em 2022, conheci a <span className="fw-bold">Alura</span> através de um influenciador digital. Na ocasião, a plataforma estava oferecendo uma imersão gratuita em Javascript, e eu pensei, porque não? Nunca imaginei que eu conseguiria um dia mexer em um código, mas naquele momento, eu percebi que sim, dava pra mudar de rumo na vida e aprender uma coisa nova que nunca me passou pela cabeça. E hoje estamos aqui! Criando a minha própria página em React do zero, apenas com conhecimentos adquiridos nos estudos desses quase 2 anos.</p>
                <p>Sou uma pessoa <span className="fw-bold">curiosa, criativa, cheia de energia e com uma verdadeira paixão pelo conhecimento</span>. Gosto de aprender coisas novas, conhecer novos lugares e pessoas, sou extrovertida, sou comunicativa, as vezes até demais, hahaha...</p>
                <p>Acredito que a experiência acadêmica me proporcionou uma habilidade de pesquisa, de autodidatismo e de resolução de problemas que são essenciais para a área de tecnologia. A experiência como professora, me proporcionou aperfeiçoar as minhas softskills, como a <span className="fw-bold">escuta atenta, a capacidade de transmitir conhecimentos e ideias de forma clara e acessível, além de facilitar as relações interpessoais, tendo sempre uma boa relação, tanto com os alunos, quanto com a equipe pedagógica, resolvendo conflitos da melhor maneira possível.</span></p>
                <p>Além disso, durante a minha vida eu sempre tive paixões paralelas, como a costura e o tricô, que me acompanham desde a infância, habilidades aprendidas com a minha avó, dona Gisa <span className="fst-italic">(In memorian)</span>. Mais recentemente, me apaixonei pelo desenho e pelo violão, dois hoobies que aprendi sozinha, e sigo desenvolvendo com curiosidade e criatividade.</p>
                <p>Quando iniciei os estudos em programação, percebi que essas características sempre muito fortes em mim, <span className="fw-bold">criatividade, faça você mesma, perspicácia, determinação em resolver os desafios sem desistir, seriam essenciais para a carreira, e assim, descobri o que eu queria de fato fazer na vida.</span></p>
                <p>Portanto, estou aqui, desenvolvendo projetos, liberando pro mundo, e me mostrando um pouco para, enfim, ter a oportunidade de mostrar todo o meu potencial na área ingressando no mercado de trabalho! Fiquem à vontade!</p>                
            </div>
        

        <Rodape />
        </section>
        </>
    )
}