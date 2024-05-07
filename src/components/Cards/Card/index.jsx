import BotaoCards from "../../BotaoCards";


export default function Card({ src, alt, titulo, descricao })  {
    return (
        <div class="col-12 col-md-6 col-xl-4 pb-4">
            <div class="card text-center">
                <img class="img-card" src={src} alt={alt}/>
                <div class="card-header ">
                    <h5 class="text-center">{titulo}</h5>
                    <p class="text-center">{descricao}</p>
                    <BotaoCards />
                </div>
            </div>
        </div>
    )
}