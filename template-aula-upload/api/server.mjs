import { server } from './config/app.mjs'

const port = server.get('port')

server.listen(port, () => {
  console.log('Servidor Rodando', port)
})

