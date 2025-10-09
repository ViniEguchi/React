import { useEffect, useState } from "react"
import axios from 'axios'

export function ExibirPersonagens() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(Response => response.json())
            .then(data => {
                const dataMapeado = data.results.map(personagem => ({
                    nome: personagem.name,
                    avatar: personagem.image
                }));
                setData(dataMapeado);
            })
            .catch(erro => console.log(erro))
    }, []);

    return <ul>{
        data.map(personagem => {
            <div>{personagem.nome} <img src={personagem.avatar} /></div>
        })
    }</ul>
}