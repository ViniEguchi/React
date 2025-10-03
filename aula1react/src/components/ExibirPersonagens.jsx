import { useEffect, useState } from "react"

export function ExibirPersonagens() {
    const [personagens, setPersonagens] = useState([])

    async function getPersonagens() {
        const resposta = await fetch ("https://rickandmortyapi.com/api/character").then(res => res.json());
        console.log(resposta)

        const listaPersonagens = resposta.results.map(element => ({
            nome: element.name,
            imagem: element.image
        }));

        setPersonagens(listaPersonagens);
    }

    useEffect(() => {getPersonagens()}, [])

    return (
        <>
            <ul className="flex flex-col gap-4">
                {personagens.map((personagem) => (
                    <li>{personagem.nome} <img src={personagem.imagem}/></li>
                ))}
            </ul>
        </>
    )
} 