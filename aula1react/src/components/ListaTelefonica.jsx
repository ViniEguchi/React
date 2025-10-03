import { useState } from "react"

export function ListaTelefonica() {
    const [listaTelefonica, setListaTelefonica] = useState([{
        nome: "Aoki",
        telefone: "12345-6789"
    }]);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    function salvarNome(event) {
        setNome(event.target.value)
    }

    function salvarTelefone(event) {
        setTelefone(event.target.value)
    }

    function cadastrar() {
        setListaTelefonica([
            ...listaTelefonica, {
                nome: nome,
                telefone: telefone
            }
        ])
    }

    function excluir(index) {
        const lista = listaTelefonica.filter((_item, indexItem) => indexItem != index);
        setListaTelefonica(lista);
    }

    return(
        <>
            <div>
                <label>Nome:</label>
                <input type="text" onChange={salvarNome} />
            </div>

            <div>
                <label>Telefone:</label>
                <input type="text" onChange={salvarTelefone} />
            </div>

            <div>
                <button onClick={cadastrar}>Cadastrar</button>
            </div>

            <div>
                <ul>
                    {listaTelefonica.map((item, index) => <li>nome: {item.nome} | telefone: {item.telefone} <button onClick={() => excluir(index)}>Excluir</button> </li>)}
                </ul>
            </div>
        </>
    )
}