import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../provider/api";

export function Crud2() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        listar();
    }, []);

    function listar() {
        api.get("/filmes")
            .then(response => {
                console.log("Filmes listados:", response.data);
                setFilmes(response.data);
            })
            .catch(erro => console.log("Erro ao listar:", erro));
    }

    function adicionar(novoFilme) {
        api.post("/filmes", novoFilme)
            .then(response => {
                console.log("Filme adicionado:", response.data);
                listar();
            })
            .catch(erro => console.log("Erro ao adicionar:", erro));
    }

    function atualizar(id, filmeAtualizado) {
        api.put(`/filmes/${id}`, filmeAtualizado)
            .then(response => {
                console.log("Filme atualizado:", response.data);
                listar();
            })
            .catch(erro => console.log("Erro ao atualizar:", erro));
    }

    function atualizarParcial(id, dadosParciais) {
        api.patch(`/filmes/${id}`, dadosParciais)
            .then(response => {
                console.log("Filme atualizado parcialmente:", response.data);
                listar();
            })
            .catch(erro => console.log("Erro ao atualizar parcialmente:", erro));
    }

    function remover(id) {
        api.delete(`/filmes/${id}`)
            .then(() => {
                console.log(`Filme ${id} removido com sucesso`);
                listar();
            })
            .catch(erro => console.log("Erro ao remover:", erro));
    }

    function exemploAdicionar() {
        const novoFilme = {
            titulo: "Vingadores: Ultimato",
            genero: "Ação",
            duracao: 181,
            nota: 8.4
        };
        adicionar(novoFilme);
    }

    function exemploAtualizar() {
        const filmeAtualizado = {
            id: 1,
            titulo: "A Origem (Inception)",
            genero: "Ficção Científica",
            duracao: 148,
            nota: 9.0
        };
        atualizar(1, filmeAtualizado);
    }

    function exemploAtualizarParcial() {
        atualizarParcial(2, { nota: 9.0 });
    }

    function exemploRemover() {
        remover(20);
    }

    return (
        <div>
            <h1>CRUD de Filmes</h1>

            <div className="flex flex-col">
                <button className="border-black border-1 w-100" onClick={listar}>GET - Listar Todos</button>
                <button className="border-black border-1 w-100" onClick={exemploAdicionar}>POST - Adicionar</button>
                <button className="border-black border-1 w-100" onClick={exemploAtualizar}>PUT - Atualizar ID 1</button>
                <button className="border-black border-1 w-100" onClick={exemploAtualizarParcial}>PATCH - Atualizar Nota ID 2</button>
                <button className="border-black border-1 w-100" onClick={exemploRemover}>DELETE - Remover ID 20</button>
            </div>

            <table className="w-200">
                <thead className="text-center border-b-2">
                    <tr>
                        <th>Filme</th>
                        <th>Genero</th>
                        <th>Nota</th>
                        <th>Duração(minutos)</th>
                    </tr>
                </thead>
                {filmes.map(f =>
                    <tbody className="text-center border-b-1">
                        <tr key={f.id}>
                            <td>{f.titulo}</td>
                            <td>{f.genero}</td>
                            <td>{f.nota}</td>
                            <td>{f.duracao}</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
}