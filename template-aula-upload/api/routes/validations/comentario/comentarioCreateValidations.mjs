import { body } from "express-validator";

export const comentarioCreateValidations = body('descricao')
    .notEmpty()
    .withMessage('O campo descricao é obrigatório.')
    .isString()
    .withMessage('O campo descricao deve ser uma string.')