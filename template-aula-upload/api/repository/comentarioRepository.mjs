import { server } from '../config/app.mjs'
import { randomUUID } from 'crypto'
import fs from 'fs'
import path from 'path'

const ComentarioRepository = () => {
  const filePath = path.resolve('./api/data/data.json')

  const loadData = () => {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(fileData) || []
    }
    return []
  }

  const findByPostagemId = idPostagem => {
    const data = loadData()
    return data.comentarios.filter(comentario => comentario.idPostagem === idPostagem)
  }

  const deleteById = id => {
    const data = loadData()
    const updatedComentarios = data.comentarios.filter(comentario => comentario.id !== id)
    data.comentarios = updatedComentarios
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
    return updatedComentarios
  }

  const create = data => {
    const dataStorage = loadData()
    const newComentario = {
      id: randomUUID(),
      ...data
    }
    dataStorage.comentarios = [...(dataStorage.comentarios || []), newComentario]
    fs.writeFileSync(filePath, JSON.stringify(dataStorage, null, 2), 'utf-8')
    return newComentario
  }

  const existsById = idComentario => {
    const dataStorage = loadData()
    return dataStorage.comentarios.some(comentario => comentario.id === idComentario)
  }

  return {
    create,
    deleteById,
    existsById,
    findByPostagemId
  }
}

export const comentarioRepository = ComentarioRepository()
