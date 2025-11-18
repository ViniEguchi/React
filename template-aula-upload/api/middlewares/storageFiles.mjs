import path from 'path'

import multer from 'multer'

const filePath = path.resolve('./imagens')

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, filePath)
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname)
    const nomeArquivo = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`
    cb(null, nomeArquivo)
  }
})

export const upload = multer({ storage })
