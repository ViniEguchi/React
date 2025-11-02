export function Imagem(props){

  return <img src={props.isLogado ? "/feliz.jpeg" :"/triste.jpeg"} alt="" style={
      {
        width:"200px"
      }
     } />
}