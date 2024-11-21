import type { IAdapter } from '../adapters/adapter.js'
import type { IPlanet } from '../models/planet.js'
import type { IService } from './service.js'
import { Planeta } from '../models/planeta.js'

// Servicio para gestionar planetas de la API.
export class PlanetaService implements IService<Planeta> {
  // El constructor de la clase.
  constructor(
    private adapter: IAdapter,
  ) {}

  // Lista todos los planetas de la API.
  async list(page = '1'): Promise<Planeta[] | undefined> {
    const planets = await this.adapter.list<IPlanet>('planets', page)
    return planets?.map(planet => Planeta.fromPlanet(planet))
  }

  // Busca un planeta por su ID en la API.
  async find(id: string): Promise<Planeta | undefined> {
    const planet = await this.adapter.find<IPlanet>('planets', id)
    return planet ? Planeta.fromPlanet(planet) : undefined
  }
}
