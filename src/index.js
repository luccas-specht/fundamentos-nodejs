const express = require('express')

const app = express()

app.use(express.json())

/*
 -> Tipos de Paramêtros:
    * Route Params => Identificar um recurso editar/deletar/buscar
    * Query Params => Paginação/filtro/ordenação
    * Body Params => Objeto para inserção/alteração (JSON) na maioria das vezes
*/

app.get('/courses', (request, response) => {
  const query = request.query
  console.log('querry::', query);
  return response.json(["curso 1", "curso 2", "curso 3"])
  })

app.post('/courses', (request, response) => {
  const body = request.body
  console.log('body:', body)
    return response.json(["curso 1", "curso 2", "curso 3", "curso 4"])
  })

app.put('/courses/:id', (request, response) => {
  const params = request.params
  console.log('params::', params);
    return response.json(["curso 6", "curso 2", "curso 3", "curso 4"])
  })
 
app.patch('/courses/:id', (request, response) => {
    return response.json(["curso 6", "curso 7", "curso 3", "curso 4"])
  })

app.delete('/courses/:id', (request, response) => {
    return response.json(["curso 6", "curso 7", "curso 4"])
  })

// porta na qual vai ser feita as requests
// Ex: localhost:3333
app.listen(3333)

