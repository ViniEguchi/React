import { Link, useParams } from "react-router-dom";
import { ListaFrutas } from "../components/ListaFrutas";

export function Frutas() {
    const params = useParams();
    
    return (
        <div>
            id Frutas {params.id}
            <ListaFrutas />
            <Link to={"/card"}>Clique para ir para os cards</Link>
        </div>
    )
}