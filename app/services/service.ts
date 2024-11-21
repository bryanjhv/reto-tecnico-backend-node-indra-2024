// Interfaz service para definir métodos comunes a capas de servicios.
export interface IService<T> {
  // Lista todos los registros de un recurso.
  list: (page: string) => Promise<T[] | undefined>

  // Busca un recurso por su ID.
  find: (id: string) => Promise<T | undefined>

  // Crea un recurso (opcional).
  create?: (data: T) => Promise<boolean>
}
