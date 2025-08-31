const base_url = "http://localhost:3000/jogos";

async function show() {
    let msg = "";

    const jogos = await fetch(`${base_url}`).then(res => res.json());
    console.log(jogos);

    jogos.forEach(jogo => {
        msg += `<tr>
                    <td>${jogo.id}</td>
                    <td>${jogo.nome}</td>
                    <td>${jogo.genero}</td>
                    <td>R$${jogo.preço}</td>
                </tr>`;
    });

    div_msg.innerHTML = `
        <table>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Genero</th>
                <th>Preço</th>
            </tr>
            ${msg}
        </table>
    `;
}

async function add() {
    let id = ipt_id.value;
    let nome = ipt_nome.value;
    let genero = ipt_genero.value;
    let preco = ipt_preco.value;

    try {
        const res = await fetch(`${base_url}`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, nome, genero, preco })
        });

        show();
    } catch (error) {
        console.warn(error)
    }
}

async function alter() {
    let id = ipt_id.value;
    let nome = ipt_nome.value;
    let genero = ipt_genero.value;
    let preco = ipt_preco.value;

    try {
        const res = await fetch(`${base_url}/${id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, genero, preco })
        });

        show();
    } catch (error) {
        console.warn(error)
    }
}

async function del() {
    let id = ipt_id.value;

    try {
        const res = await fetch(`${base_url}/${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        show();
    } catch (error) {
        console.warn(error)
    }
}
