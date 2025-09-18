export function Cards(props) {

    function backColor() {
        if (props.desabilitado) {
            return 'grey';
        } else if (props.tipo === "dark") {
            return 'black'
        } else {
            return 'white'
        }
    }

    return (
        <>
            <div style={{
                backgroundColor: backColor()
            }}>
                {props.tipo !== "minimalist" && <div style={{
                    color: props.tipo === "dark" ? 'white' : 'black'
                }} >{props.titulo}</div>}
                {props.tipo !== "minimalist" && <div style={{
                    color: props.tipo === "dark" ? 'white' : 'black'
                }} >{props.descricao}</div>}
                <img src={props.img} />
                <button disabled={props.desabilitado}>Oi eu sou um botão</button>
            </div>
        </>
    )
}

export function ListarCard() {
    const cards = [
        {
            titulo: "Card Dark",
            descricao: "Este é um card com tema escuro",
            img: "/vite.svg",
            tipo: "dark",
            desabilitado: false
        },
        {
            titulo: "Card Minimalist",
            descricao: "Este é um card minimalista",
            img: "/vite.svg",
            tipo: "minimalist",
            desabilitado: false
        },
        {
            titulo: "Card Desabilitado",
            descricao: "Este card está desabilitado",
            img: "/vite.svg",
            tipo: "dark",
            desabilitado: true
        }
    ];

    return (
        <div>
            {cards.map((card) => (
                <li>
                    <Cards
                        titulo={card.titulo}
                        descricao={card.descricao}
                        img={card.img}
                        tipo={card.tipo}
                        desabilitado={card.desabilitado}
                    />
                </li>
            ))}
        </div>
    );
}