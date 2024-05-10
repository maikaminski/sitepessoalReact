import Titulo from "../Titulo";
import Card from "./Card";
import cards from "../../mocks/card.json"

export default function Cards() {
    return (
        <>
            <div >
                <Titulo>Conheça um pouco da minha trajetória de vida!</Titulo>
                <div className="container row mx-auto g-4 m-5">
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