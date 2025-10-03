import { useEffect, useState } from "react"

export function Contador() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = contador
    })

    function somar() {
        setContador(contador + 1);
    }

    function subtrair() {
        setContador(contador - 1);
    }

    return (
        <>
            <div>
                <button onClick={somar}>Adicionar</button>
                <button onClick={subtrair}>Diminuir</button>
            </div>

            <div>Contador: {contador}</div>
        </>
    )
}