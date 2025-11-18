import { comentarioRepository } from "../repository/comentarioRepository.mjs"
import { postagemRepository } from "../repository/postagemRepository.mjs"
import { usuarioRespository } from "../repository/usuarioRespository.mjs"

const ComentariosService = () => {
  
  const mapperComentarioResponse = (comentario, usuario) => {
    
    const comentarioEntidade = {
      id:comentario.id,
      descricao: comentario.descricao,
      criadoEm: comentario.criadoEm,
      usuario: {
        nome: usuario.nome,
        email: usuario.email
      }
    }

    return comentarioEntidade
  }

    const mapperComentarioRequest = (comentario, usuarioId,idPostagem) => {
      const comentarioEntidade = {
        descricao: comentario.descricao,
        criadoEm: comentario.criadoEm,
        usuarioId,
        idPostagem,
      }

      return comentarioEntidade
    }

  const criar = (req, res) => {
      
    const body = req.body;
    const idPostagem = req.params.idPostagem;
    const usuarioId = req.usuarioId;
    
    if(!postagemRepository.existsById(idPostagem)) return res.status(404).json({ errors: ['Postagem não encontrada'] });
    
    const comentario = mapperComentarioRequest(body,usuarioId,idPostagem);

    const comentarioSalvo = comentarioRepository.create(comentario);

    const usuario = usuarioRespository.findByUserId(comentarioSalvo.usuarioId)
    
    const comentarioResponse = mapperComentarioResponse(comentarioSalvo,usuario)
    
    return res.status(201).json(comentarioResponse);
  
  }

  const deletar = (req, res) => {
    const idComentario = req.params.idComentario;
    console.log(req)
    
    if (!comentarioRepository.existsById(idComentario)) {
      return res.status(404).json({ errors: ["Comentário não encontrado"] });
    }

    comentarioRepository.deleteById(idComentario);

    return res.status(204).send();
  };

  const buscar = async (req, res) => {
    const idPostagem = req.params.idPostagem;

    const postagemExistente = await postagemRepository.findById(idPostagem);

    if(!postagemExistente) return res.status(404).send();

    const comentarios = comentarioRepository.findByPostagemId(idPostagem);

    if (!comentarios || comentarios.length === 0) {
      return res.status(204).send();
    }

    const comentariosMapeados = comentarios.map((comentario) => {
      const usuario = usuarioRespository.findByUserId(comentario.usuarioId);
      return mapperComentarioResponse(comentario, usuario);
    });

    return res.status(200).json(comentariosMapeados);
  };

  return {
    criar,
    deletar,
    buscar,
  };
}
export const comentarioService = ComentariosService();



