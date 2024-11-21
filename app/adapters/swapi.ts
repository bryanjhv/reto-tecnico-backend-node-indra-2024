import type { IAdapter } from './adapter.js'
import { env } from 'node:process'

// URL de SWAPI desde variables de entorno.
const { SWAPI_URL = 'https://swapi.py4e.com/api' } = env

// Adaptador para llamar a Star Wars API.
export class SwapiAdapter implements IAdapter {
  // El constructor de la clase.
  constructor(
    private apiUrl = SWAPI_URL,
  ) {}

  // Lista todos los registros de una tabla por página.
  async list<T>(table: string, page = '1'): Promise<T[] | undefined> {
    return (await this.fetch<{ results: T[] }>(`${table}/?page=${page}`))?.results
  }

  // Busca un registro por su ID en una tabla.
  async find<T>(table: string, id: string): Promise<T | undefined> {
    return this.fetch<T>(`${table}/${id}/`)
  }

  // Método privado para hacer llamadas a la API.
  private async fetch<T>(path: string): Promise<T | undefined> {
    const response = await fetch(`${this.apiUrl}/${path}`)
    return response.ok ? await response.json() as T : undefined
  }
}
