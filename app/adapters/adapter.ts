// Interfaz adapter para definir métodos comunes a capas de acceso a datos.
export interface IAdapter {
  // Lista todos los registros de una tabla.
  list: <T>(table: string, page: string) => Promise<T[] | undefined>

  // Busca un registro por su ID en una tabla.
  find: <T>(table: string, id: string) => Promise<T | undefined>

  // Crea un registro en una tabla (opcional).
  create?: <T>(table: string, data: T) => Promise<boolean>
}
