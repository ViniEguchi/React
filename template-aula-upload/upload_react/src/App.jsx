import { useState } from "react";
import { api } from "../http/axios-instance";

function App() {
  const id = 'df71689b-d517-4af3-8e42-1be334d424bd'
  const [imagens, setImagens] = useState([]);
  // Endpoint para salvar imagem /api/postagens/{id}/imagens
  async function upload(evento) {
    const file = evento.target.files[0];
    const formData = new FormData();
    formData.append("imagem", file);

    await api.post(`/api/postagens/${id}/imagens`, formData, {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })

    const copyImagem = [...imagens, URL.createObjectURL(file)];
    setImagens(copyImagem);
  }
  
  return (
    
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm text-center">
        <h1 className="text-lg font-semibold mb-4">Upload de Imagem</h1>
        <label className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50">
          <span className="text-gray-500">Clique para selecionar uma imagem</span>
          <input type="file" accept="image/*"  className="hidden" onChange={upload} />
        </label>
        
      </div>

      {
        imagens.map(imagem => <img src={imagem}/>)
      }

    </main>
  )
}

export default App
