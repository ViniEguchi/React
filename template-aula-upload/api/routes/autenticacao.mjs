import { Router } from "express";
import { autenticacaoService } from "../services/autenticacaoService.mjs";
const autenticacaoRouter = Router();

autenticacaoRouter.post("/login",autenticacaoService.login)

export const autenticacao =  autenticacaoRouter;