import { postagemRepository } from '../repository/postagemRepository.mjs'
import path from 'path'
import fs from 'fs'



const ArquivoService = () => {
  const convertUrl = (req, filename) => {
    const baseUrl = `${req.protocol}://${req.get('host')}/api/postagens/imagens`
    return `${baseUrl}/${filename}`
  }

  const salvarArquivo = async (req, res) => {
    const id = req.params.id

    // Verificar se o arquivo foi enviado
    if (!req.file || !req.file.filename) {
      return res.status(400).json({ error: 'Nenhum arquivo foi enviado.' })
    }

    try {
      // Buscar a postagem de forma assíncrona
      const postagem = await postagemRepository.findById(id)
      if (!postagem) {
        return res.status(404).json({ error: 'Postagem não encontrada.' })
      }

      // Atualizar a postagem com o nome do arquivo
      const postagemAtualizada = await postagemRepository.update(id, {
        ...postagem,
        imagem: req.file.filename
      })

      const imagemUrl = convertUrl(req, req.file.filename)
      return res.status(200).json({ imagemUrl })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao salvar o arquivo.' })
    }
  }

  const getArquivo = (req, res) => {
    const filename = req.params.filename
    const imagensDir = path.resolve('./imagens')

    if (!fs.existsSync(imagensDir)) {
      fs.mkdirSync(imagensDir, { recursive: true })
    }
    const filePath = path.join(imagensDir, filename)
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Arquivo não encontrado.' })
    }

    res.setHeader('Content-Disposition', `inline; filename="${filename}"`)
    res.sendFile(filePath, err => {
      if (err) {
        console.error(err)
        return res.status(500).json({ error: 'Erro ao enviar o arquivo.' })
      }
    })
  }

  return {
    salvarArquivo,
    getArquivo,
    convertUrl
  }
}

export const arquivoService = ArquivoService()
