export function Card(props){

  const styleImagem= {
    width:"100px"
  }

  function getBackground(){
    if(props.desabilitado){
      return "gray"
    }
    
    if(props.type == "dark"){
      return "black" 
    }
  }

  const styleCard={
    background: getBackground(),
    border:" 1px solid black",
    color:props.type === "dark" ? "white" : "",
  }

  const styleButton ={
    background:props.desabilitado ? "gray": ""
  }

  const isNotMinimalista = props.type != "minimalista"
  return(
    <section style={styleCard}>
      <img src={props.imagem} style={styleImagem}/>
      {
        isNotMinimalista ?
        <>  
          <h1>{props.titulo}</h1>
          <p>{props.descricao}</p>
         </>: ""
      }
      
      <button style={styleButton} disabled={props.desabilitado}>Clique aqui</button>
    </section>
  )
}