import { useEffect, useState } from "react";

export function ListaFrutas() {
    const [frutas, setFrutas] = useState([{
        nome: "Maçã",
        preco: 1.99,
        quantidade: 2
    }])

    useEffect(() => {
        console.log("adicionou fruta")
    }, [frutas])

    const [valores, setValores] = useState({
        nome: "",
        quantidade: "",
        preco: ""
    })

    function adicionar() {
        setFrutas([...frutas, {
            nome: valores.nome,
            quantidade: valores.quantidade,
            preco: valores.preco
        }])
    }

    function salvarNome(event) {
        setValores({ ...valores, nome: event.target.value });
    }

    function salvarQuantidade(event) {
        setValores({ ...valores, quantidade: event.target.value });
    }

    function salvarPreco(event) {
        setValores({ ...valores, preco: event.target.value });
    }

    function remover(index) {
        const lista = frutas.filter((_frutas, indexFruta) => indexFruta != index);
        setFrutas(lista);
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <label>nome:  </label>
                <input className="border border-white" type="text" onChange={salvarNome} />
            </div>

            <div>
                <label>quantidade:  </label>
                <input className="border border-white" type="text" onChange={salvarQuantidade} />
            </div>

            <div>
                <label>preco:  </label>
                <input className="border border-white" type="text" onChange={salvarPreco} />
            </div>

            <button onClick={adicionar}>Adicionar</button>
            <ul>
                {frutas.map((fruta, index) => <li>nome: {fruta.nome} | Quantidade: {fruta.quantidade} | Preço: {fruta.preco} <button onClick={() => remover(index)}>Deletar</button></li>)}
            </ul>
        </div>
    );
}