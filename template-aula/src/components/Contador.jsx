import { useState } from "react";

export function Contador(){

  const [contadora, setContadora] = useState(0)
  
  function contar(){
    setContadora(contadora + 1)
  }

  function exibirMensagem(){
    if(contadora < 10){
      return "Quase lá"
    }

    if(contadora < 20){
      return "Persista guerreiro"
    }

    return "Vc é fera"
  }

  return(
    <div>
      {contadora}
      {exibirMensagem()}
       <br/>
      <button onClick={contar} className="border p-2 cursor-pointer">Clique</button>
    </div>
  )
}