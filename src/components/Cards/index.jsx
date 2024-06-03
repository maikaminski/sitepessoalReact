import Titulo from "../Titulo";
import Card from "./Card";
import cards from "../../mocks/card.json"

export default function Cards() {
    return (
        <>
            <div className="fundo">
                <Titulo>Conheça um pouco da minha trajetória de vida!</Titulo>
                <div className="container row mx-auto g-4 ">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            {...card}
                        />
                    ))
                    }

                </div>
            </div>
        </>
    )
}