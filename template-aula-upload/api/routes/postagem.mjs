import { Router } from "express";
import { postagemService } from "../services/postagensService.mjs";
import { validarCampos } from "../middlewares/validarCampos.mjs";
import { postagemCreateValidations } from "./validations/postagem/postagemCreateValidations.mjs";
import { postagemUpdateValidations } from "./validations/postagem/PostagemUpdateValidations.mjs";
import { arquivoService } from "../services/arquivosService.mjs";
import { upload } from "../middlewares/storageFiles.mjs";


const postagemRouter = Router();


postagemRouter.get("", postagemService.getPostagens);
postagemRouter.get("/:id", postagemService.getPostagensPorId);
postagemRouter.post("", postagemCreateValidations, validarCampos,postagemService.postPostagens);
postagemRouter.patch("/:id", postagemUpdateValidations,validarCampos,postagemService.updatePostagens);
postagemRouter.delete("/:id", postagemService.deletePostagens);
postagemRouter.post("/:id/imagens", upload.single("imagem"),arquivoService.salvarArquivo);
postagemRouter.get("/imagens/:filename",arquivoService.getArquivo)

export const postagens = postagemRouter;