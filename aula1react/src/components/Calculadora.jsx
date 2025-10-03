import { useState } from "react";

export function Calculadora() {
    const [primeiroNumero, setPrimeiroNumero] = useState("");
    const [segundoNumero, setSegundoNumero] = useState("");
    const [operacao, setOperacao] = useState("+");
    const [resultado, setResultado] = useState(null);

    function salvarNumero1(event) {
        setPrimeiroNumero(event.target.value);
    }

    function salvarNumero2(event) {
        setSegundoNumero(event.target.value);
    }

    function salvarOperacao(event) {
        setOperacao(event.target.value);
    }

    function calcular() {
        const num1 = Number(primeiroNumero);
        const num2 = Number(segundoNumero);

        if (isNaN(num1) || isNaN(num2)) {
            setResultado("Por favor, insira números válidos!");
            return;
        }

        let resultadoCalculo;

        if (operacao === "+") {
            resultadoCalculo = num1 + num2;
        } else if (operacao === "-") {
            resultadoCalculo = num1 - num2;
        } else if (operacao === "*") {
            resultadoCalculo = num1 * num2;
        } else if (operacao === "÷") {
            if (num2 === 0) {
                setResultado("Não é possível dividir por zero!");
                return;
            }
            resultadoCalculo = num1 / num2;
        } else {
            resultadoCalculo = 0;
        }

        setResultado(resultadoCalculo);
    }

    return (
        <>
            <h2>Calculadora</h2>

            <div>
                <label>Primeiro número:</label>
                <input type="number" onChange={salvarNumero1} />
            </div>

            <div>
                <label>Operação:</label>
                <select value={operacao} onChange={salvarOperacao}>
                    <option value="+">+ (Soma)</option>
                    <option value="-">- (Subtração)</option>
                    <option value="*">* (Multiplicação)</option>
                    <option value="÷">÷ (Divisão)</option>
                </select>
            </div>

            <div>
                <label>Segundo número:</label>
                <input type="number" onChange={salvarNumero2} />
            </div>

            <button onClick={calcular}>
                Calcular
            </button>

            {resultado !== null && (
                <div>
                    <p>Resultado: {resultado}</p>
                </div>
            )}
        </>
    );
}