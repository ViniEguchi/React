import { randomUUID } from 'crypto'
import fs from 'fs'
import path from 'path'




const UsuarioRepository = () => {

  const filePath = path.resolve('./api/data/data.json')
const findByUser = async ({ email }) => {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const data = JSON.parse(fileData)

      return data.usuarios.find(user => user.email === email) || null
    }
    return null
  }

  const findByUserId = id => {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const data = JSON.parse(fileData)
      return data.usuarios.find(user => user.id === id) || null
    }
    return null
  }

  const save = async data => {
    if (fs.existsSync(filePath)) {
      const fileStorage = fs.readFileSync(filePath, 'utf-8')
      const dataStorage = JSON.parse(fileStorage)

      data.id = randomUUID()

      dataStorage.usuarios.push(data)
      const jsonData = JSON.stringify(dataStorage, null, 2)
      fs.writeFileSync(filePath, jsonData)
      return data
    }
  }

  const existsByEmail = email => {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      const dataStorage = JSON.parse(fileData)
      return dataStorage.usuarios.some(user => user.email === email)
    }
    return false
  }

  return { findByUser, save, existsByEmail, findByUserId }
}

export const usuarioRespository = UsuarioRepository()
