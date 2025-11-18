import express from 'express'
import { autenticacao } from '../routes/autenticacao.mjs'
import { usuarios } from '../routes/usuarios.mjs'
import { autenticacaoService } from '../services/autenticacaoService.mjs'
import 'dotenv/config'
import { postagens } from '../routes/postagem.mjs'
import cors from 'cors'
import { comentarios } from '../routes/comentarios.mjs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const BASE_URL = process.env.BASE_URL || path.resolve(__dirname.replace("/config","")) // Go up one level from /config

  const app = express()

  app.set('baseUrl', BASE_URL)
  app.set('port', process.env.PORT || 8080)

  app.use(express.json())
  app.use(cors())
  app.use(autenticacaoService.verifyToken)
  app.use(autenticacaoService.descriptografarPayload)
  app.use('/api/usuarios', autenticacao)
  app.use('/api/usuarios', usuarios)
  app.use('/api/postagens', postagens)
  app.use('/api/postagens/:idPostagem/comentarios', comentarios)

  return app
}

export const server = app()
