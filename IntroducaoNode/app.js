// console.log(`Hello World! \n${10 + 20}`);

function filtrarNomes(lista, letra) {
    return lista.filter(nome => nome.startsWith(letra));
}

console.log(filtrarNomes(['Anna', 'JP', 'Amauri'], "A"));


const filtrarNumeros = (lista, valor) => {
    return lista.filter( (num) => {
        return num >= valor;
    } )
}

console.log(filtrarNumeros([10, 20, 30, 40], 25));