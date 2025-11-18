import { validationResult } from 'express-validator'

export const validarCampos = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorFormated = errors.array().map(json=>({
      field:json.path,
      message:json.msg
    }))
    return res.status(400).json({ erros:errorFormated })
  }
  next()
}
