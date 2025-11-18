import { Router } from "express";
import { usuarioService } from "../services/usuariosService.mjs";
import { validarCampos } from "../middlewares/validarCampos.mjs";
import { usuarioCreateValidations } from "./validations/usuario/usuarioCreateValidation.mjs";

const usuariosRouter = Router();

usuariosRouter.post("",usuarioCreateValidations,validarCampos,usuarioService.createUser)

export const usuarios = usuariosRouter;