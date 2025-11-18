import { server } from '../config/app.mjs'
import { randomUUID } from 'crypto'
import fs from 'fs'
import path from 'path'

const PostagemRepository = () => {
  const filePath = path.resolve('./data/data.json')
  console.log(process.env.BASE_URL)
  const loadData = () => {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(fileData) || {}
    }
    return []
  }

  const findById = async id => {
    const dataStorage = loadData()
    return dataStorage.postagens.find(post => post.id === id) || null
  }

  const save = async data => {
    const dataStorage = loadData()

    data.id = randomUUID()
    const newPostagem = { ...data, createdAt: new Date().toISOString() }
    dataStorage.postagens.push(newPostagem)

    const jsonData = JSON.stringify(dataStorage, null, 2)
    fs.writeFileSync(filePath, jsonData)
    return data
  }

  const findAll = async () => {
    const data = loadData()
    return data.postagens || []
  }

  const deleteById = async id => {
    const dataStorage = loadData()

    const initialLength = dataStorage.postagens.length
    const postagens = dataStorage.postagens.filter(post => post.id !== id)
    if (postagens.length < initialLength) {
      const jsonData = JSON.stringify(
        {
          ...dataStorage,
          postagens
        },
        null,
        2
      )
      fs.writeFileSync(filePath, jsonData)
      return true
    }
    return false
  }

  const update = async (id, newData) => {
    const dataStorage = loadData()

    const postIndex = dataStorage.postagens.findIndex(post => post.id === id)
    if (postIndex !== -1) {
      dataStorage.postagens[postIndex] = { ...dataStorage.postagens[postIndex], ...newData }

      const jsonData = JSON.stringify(dataStorage, null, 2)
      fs.writeFileSync(filePath, jsonData)
      return dataStorage.postagens[postIndex]
    }
    return null
  }

  const existsById = id => {
    const dataStorage = loadData()
    return dataStorage.postagens.some(post => post.id === id)
  }

  return { findById, save, findAll, deleteById, update, existsById }
}

export const postagemRepository = PostagemRepository()
