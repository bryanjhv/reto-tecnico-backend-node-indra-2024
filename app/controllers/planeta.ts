import type { Planeta } from '../models/planeta.js'
import type { IService } from '../services/service.js'
import type { IController } from './controller.js'

// Controlador para gestionar planetas de la API.
export class PlanetaController implements IController {
  // El constructor de la clase.
  constructor(
    private readonly service: IService<Planeta>,
  ) {}

  // Lista todos los planetas de la API.
  async listPlanetas(page = '1'): Promise<Planeta[] | undefined> {
    return this.service.list(page)
  }

  // Busca un planeta por su ID en la API.
  async findPlaneta(id: string): Promise<Planeta | undefined> {
    return this.service.find(id)
  }
}
