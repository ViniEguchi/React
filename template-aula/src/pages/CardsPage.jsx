import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";

export function CardsPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const cards = [
        {
            titulo: "Percy Jackson - Ladrão de Raios",
            imagem: "/triste.jpeg",
            descricao: "Ladrão de ratos",
            type: "dark"
        },
        {
            titulo: "Hokage",
            imagem: "/feliz.jpeg",
            descricao: "Vou virar um dia",
            type: "minimalista"
        },
        {
            titulo: "Luva de pedreiro",
            imagem: "/vite.svg",
            descricao: "Receba!!!",
            desabilitado: true,
        }
    ]

    console.log(searchParams.get("nome"));

    function redirecionar() {
        navigate("/contador", {
            state: {
                nome: "Vinicius"
            }
        });
    }

    const cardsMapeados = cards.map(card => <Card titulo={card.titulo} descricao={card.descricao} desabilitado={card.desabilitado} imagem={card.imagem} />)

    return (
        <div>
            Nome: {searchParams.get("nome")}
            {cards.map(card => <Card titulo={card.titulo} descricao={card.descricao} desabilitado={card.desabilitado} imagem={card.imagem} />)}

            <button onClick={redirecionar}>Clique aqui para ir para o contador</button>
        </div>
    )
}