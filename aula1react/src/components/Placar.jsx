export function Placar(props) {

    return (
        <>
            <div>
                <span>Pontuação Time 1 {props.pontuacao1}</span> <br />
                <span>Pontuação Time 2 {props.pontuacao2}</span>
            </div>

            <button disabled={props.disabled}>Visualizar Estatisticas</button>
        </>
    )
}