import { createBrowserRouter } from "react-router-dom"
import { Frutas } from "../pages/Frutas"
import { ContadorPage } from "../pages/ContadorPage"
import { CardsPage } from "../pages/CardsPage"

export const routes = createBrowserRouter(
    [
        {
            path: "/frutas/:id",
            element: <Frutas />
        },
        {
            path: "/contador",
            element: <ContadorPage />
        },
        {
            path: "/card",
            element: <CardsPage />
        }
    ]
)