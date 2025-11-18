import { body } from "express-validator";

export const usuarioCreateValidations = [
  body("nome")
    .notEmpty()
    .withMessage("O nome é obrigatório.")
    .isString()
    .withMessage("O nome deve ser uma string."),
  body("email")
    .notEmpty()
    .withMessage("O email é obrigatório.")
    .isEmail()
    .withMessage("O email deve ser válido."),
  body("senha")
    .notEmpty()
    .withMessage("A senha é obrigatória.")
    .isLength({ min: 6 })
    .withMessage("A senha deve ter no mínimo 6 caracteres.")
];