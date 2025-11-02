import React from "react";
import { useLocation } from "react-router-dom";

export function Concluido() {
    const location = useLocation();

    const dados = location.state;

    return (
        <div>
            Obrigado!, {dados.nome}
        </div>
    )
}