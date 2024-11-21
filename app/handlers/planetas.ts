import { SwapiAdapter } from '../adapters/swapi.js'
import { PlanetaController } from '../controllers/planeta.js'
import { defineHandler, sendError } from '../helpers/lambda.js'
import { PlanetaService } from '../services/planeta.js'

const controller = new PlanetaController(new PlanetaService(new SwapiAdapter()))

export const list = defineHandler(async (event) => {
  const planetas = await controller.listPlanetas(event.queryStringParameters?.page)
  if (!planetas)
    return sendError(404, 'No se encontró la página solicitada.')
  return planetas
})

export const find = defineHandler(async (event) => {
  const id = event.pathParameters?.id
  if (!id)
    return sendError(400, 'ID de planeta no especificado.')
  const planeta = await controller.findPlaneta(id)
  if (!planeta)
    return sendError(404, 'Planeta no encontrado.')
  return planeta
})
