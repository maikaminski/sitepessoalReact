import BotaoCards from "../../BotaoCards";


export default function Card({ src, alt, titulo, descricao, pages })  {
    return (
        <div className="col-12 col-md-6 col-xl-4 pb-4">
            <div className="card text-center">
                <img className="img-card cartoes" src={src} alt={alt}/>
                <div className="card-header fundo">
                    <h5 className="text-center text-light">{titulo}</h5>
                    <p className="text-center text-light">{descricao}</p>
                    <BotaoCards pages={pages} />
                </div>
            </div>
        </div>
    )
}