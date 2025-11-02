export function Saudacao(props){

  function gerarSaudacao(){

    if(!props.isLogado){
      return <h2>Faça seu login</h2>
    }
    if(props.idade > 30){
    return <h2>Olá, ancião! Bem vindo ao 3ADS, {props.nome}</h2>  
    }
    if(props.idade > 20){
      return <h2>Olá! Pai de familia {props.nome}</h2>
    }
    if(props.idade > 10){
      return <h2>Olá! Guerreiro {props.nome}</h2>
    }
    
    return <h2>Olá! Pequeno gafanhoto {props.nome}</h2>
    
 
  }


  return <div>{gerarSaudacao()}</div>
}