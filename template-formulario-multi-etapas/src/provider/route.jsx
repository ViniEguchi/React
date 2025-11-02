import { createBrowserRouter } from "react-router-dom"
import { DadosPessoais } from "../pages/DadosPessoais"
import { DadosEndereco } from "../pages/DadosEndereco"
import { ConfirmacaoDados } from "../pages/ConfirmacaoDados"
import { Concluido } from "../pages/Concluido"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DadosPessoais />
    },
    {
        path: "/user-address",
        element: <DadosEndereco />
    },
    {
        path: "/confirm-data",
        element: <ConfirmacaoDados />
    },
    {
        path: "/done",
        element: <Concluido />
    }
])