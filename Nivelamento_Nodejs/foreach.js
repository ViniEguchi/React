const listaNomes = ["João", "Maria", "Ana"];

listaNomes.forEach(
    function (nome, i, lista) {
        console.log(`${i} | ${nome} | ${JSON.stringify(lista)}`);
    }
)