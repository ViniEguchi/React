import { Router } from "express";
import {comentarioService} from "../services/comentariosService.mjs"
import { comentarioCreateValidations } from "./validations/comentario/comentarioCreateValidations.mjs";
import { validarCampos } from "../middlewares/validarCampos.mjs";
const comentariosRouter = Router({
  mergeParams:true
});

comentariosRouter.get("/",comentarioService.buscar);
comentariosRouter.post("/",comentarioCreateValidations,validarCampos, comentarioService.criar);
comentariosRouter.delete("/:idComentario", comentarioService.deletar);

export const comentarios = comentariosRouter;