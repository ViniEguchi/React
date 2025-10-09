import axios from 'axios'
import { useEffect, useState } from 'react'
import { api } from '../../../aula1react/src/provider/api';

export function Crud() {
    const [data, setData] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    function listar() {
        api.get("/personagens")
            .then(response => {
                const dataMapeado = response.data.map(personagem => ({
                    nome: personagem.nome,
                    imagem: personagem.picture
                }));
                setData(dataMapeado);
            })
            .catch(erro => console.log(erro));
    }

    function adicionar() {
        api.post("/personagens", {
            id: 1,
            nome: "Pedro",
            picture: "/teste.png"
        })
            .then(response => console.log(response.data))
    }

    function remover() {
        api.delete("/personagens/3")
        .then(() => listar())
    }

    return <>
        <button onClick={adicionar}>Adicionar</button>
        <div>
            {data.map((per, index) =>
            (<div key={index}>
                <div>{per.nome}</div> <img src={per.imagem} />
            </div>)
            )}
        </div>
    </>
}