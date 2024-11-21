import { SwapiAdapter } from '../adapters/swapi.js'
import { VehiculoController } from '../controllers/vehiculo.js'
import { defineHandler, sendError } from '../helpers/lambda.js'
import { VehiculoService } from '../services/vehiculo.js'

const controller = new VehiculoController(new VehiculoService(new SwapiAdapter()))

export const list = defineHandler(async (event) => {
  const vehiculos = await controller.listVehiculos(event.queryStringParameters?.page)
  if (!vehiculos)
    return sendError(404, 'No se encontró la página solicitada.')
  return vehiculos
})

export const find = defineHandler(async (event) => {
  const id = event.pathParameters?.id
  if (!id)
    return sendError(400, 'ID de vehículo no especificado.')
  const vehiculo = await controller.findVehiculo(id)
  if (!vehiculo)
    return sendError(404, 'Vehículo no encontrado.')
  return vehiculo
})
