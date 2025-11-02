import { useLocation, useNavigate } from "react-router-dom";
import { Contador } from "../components/Contador";

export function ContadorPage() {
    const navigate = useNavigate();
    const location = useLocation();

    function voltarPaginaAnterior() {
        navigate(-1);
    }
    
    return (
        <div>
            Nome: {location.state?.nome}
            <Contador />
            <button onClick={voltarPaginaAnterior}>voltar</button>
        </div>
    )
}