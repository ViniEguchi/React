import { useState } from 'react';

export function Contador() {
    const [contadora, setContadora] = useState(0);
    console.log("Renderização");
    
    function contar() {
        setContadora(contadora + 1);
    }
    
    const [mensagem, setMensagem] = useState("");
    
    function exibirMensagem() {
        if (contadora < 10) {
            return <p>Quase lá</p>;
        } else if (contadora < 20) {
            return <p>Persista guerreiro</p>;
        } else {
            return <p>Vc é o fera</p>;
        }
    }

    return (
        <>
            <button onClick={contar}>Clique</button>
            <div>Contador: {contadora}</div>
            <div>{exibirMensagem()}</div>
        </>
    );
}