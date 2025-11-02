import { useEffect, useState } from "react"

export function ListaFrutas(){

  const [count,setCount] = useState(0)
 
  const [valores,setValores] = useState({
    nome:"",
    quantidade:"",
    preco:0
  })

  const [frutas,setFrutas] = useState([])


  useEffect(()=>{
    console.log("Adicinou Frutas")
  },[frutas,valores])


  useEffect(()=>{
    adicionar()
  },[valores])
    
  function adicionar(){

    setFrutas([...frutas,{
      nome:valores.nome,
      quantidade:valores.quantidade,
      preco:valores.preco
    }])

  }

  

  function salvarNome(event){
    setValores({...valores,nome:event.target.value})
  }

   function salvarQuantidade(event){
    setValores({...valores,quantidade:event.target.value})
  }

  function salvarPreco(event){
    setValores({...valores,preco:event.target.value})
  }

  function remover(index){
    const lista = frutas.filter((_frutas,indexFruta)=> indexFruta != index);
    setFrutas(lista)
  }

  useEffect(()=>{
    setCount(count+1)
  },[])

  console.log(count)


  return <div>
    <form></form>
  <div className="text-left">
      <label className="mr-5">Nome</label>
      <input type="text"  className="border" onChange={salvarNome}/>
      {valores.nome}
  </div>  
  <div className="text-left">
    <label className="mr-5">Preco</label>
    <input type="number" className="border" onChange={salvarPreco}/>
  </div>
  <div className="text-left">
    <label className="mr-5">Quantidade</label>
    <input type="number" className="border" onChange={salvarQuantidade}/>
  </div>


  <div>
    <h2>NOME_CARTÃO</h2>
    <h3>NUMERO_CARTÃO</h3>
    <strong>CVV</strong>
  
  </div>

  <button className="border px-10" onClick={adicionar}>Cadastrar</button>

    <ul>
      {frutas.map((fruta,index)=>
        <li>Nome: {fruta.nome} Quantidade: {fruta.quantidade} Preço {fruta.preco}
        <button className="p-1 border" onClick={()=>remover(index)}>Deletar</button>
        </li>)
      }
    </ul>
  </div>
}