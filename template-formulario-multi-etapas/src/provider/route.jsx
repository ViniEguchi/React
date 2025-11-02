import { createBrowserRouter } from "react-router-dom"
import { DadosPessoais } from "../pages/DadosPessoais";

export const routes = createBrowserRouter(
    [
        {
            path: "/dadospessoais",
            element: <DadosPessoais />
        }
    ]
)