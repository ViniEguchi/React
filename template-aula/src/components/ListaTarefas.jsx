
export function ListaTarefas(props) {
  return (
    <ul>
      {props.tarefas.map(tarefa=>
        <>
           <li style={{
            color: tarefa.concluida ? "green" : "red"
           }}>{tarefa.nome}</li>
        </>
      )}
     </ul>
  )
}
