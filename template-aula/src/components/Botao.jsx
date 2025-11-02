export function Botao(props){

  return(
    <button style={{
      backgroundColor: props.isLogado ? "red" : "green",
      color:"white"
     }}>{props.children}</button>
  )
}
