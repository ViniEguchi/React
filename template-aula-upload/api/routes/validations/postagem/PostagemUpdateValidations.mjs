import { body } from "express-validator";

export const postagemUpdateValidations = [body('titulo').optional()
  .notEmpty()  
  .withMessage('O título é obrigatório.')
    .isString()
    .withMessage('O título deve ser uma string.')
    .isLength({ min: 5 })
    .withMessage('O título deve ter no mínimo 5 caracteres.'),
  body('conteudo')
    .optional()
    .notEmpty()
    .withMessage('A descrição é obrigatória.')
    .isString()
    .withMessage('A descrição deve ser uma string.')
    .isLength({ min: 10 })
    .withMessage('A descrição deve ter no mínimo 10 caracteres.')]