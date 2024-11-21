import type { IUsuario } from '../models/usuario.js'
import { DatabaseAdapter } from '../adapters/database.js'
import { UsuarioController } from '../controllers/usuario.js'
import { defineHandler, sendError } from '../helpers/lambda.js'
import { UsuarioService } from '../services/usuario.js'

const controller = new UsuarioController(new UsuarioService(new DatabaseAdapter()))

export const list = defineHandler(async (event) => {
  const usuarios = await controller.listUsuarios(event.queryStringParameters?.page)
  if (!usuarios)
    return sendError(404, 'No se encontró la página solicitada.')
  return usuarios
})

export const find = defineHandler(async (event) => {
  const id = event.pathParameters?.id
  if (!id)
    return sendError(400, 'ID de usuario no especificado.')
  const usuario = await controller.findUsuario(id)
  if (!usuario)
    return sendError(404, 'Usuario no encontrado.')
  return usuario
})

export const create = defineHandler(async (event) => {
  if (!event.body)
    return sendError(400, 'Petición no válida.')
  let data: IUsuario
  try {
    data = JSON.parse(event.body)
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (error) {
    return sendError(400, 'Cuerpo no válido.')
  }
  const usuario = await controller.createUsuario(data)
  if (!usuario)
    return sendError(400, 'Falló crear el usuario.')
  return 'Usuario creado.'
})
