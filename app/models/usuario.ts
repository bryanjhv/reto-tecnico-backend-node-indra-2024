// Interfaz para representar un usuario.
export interface IUsuario {
  // El ID del usuario.
  id: string

  // El correo del usuario.
  correo: string

  // La clave encriptada del usuario.
  clave: string

  // El nombre del usuario.
  nombre: string
}

// Clase para representar un usuario.
export class Usuario implements IUsuario {
  // El constructor de la clase.
  constructor(
    // El ID del usuario.
    public id: string,

    // El correo del usuario.
    public correo: string,

    // La clave encriptada del usuario.
    public clave: string,

    // El nombre del usuario.
    public nombre: string,
  ) {}

  // Método para crear un usuario.
  static create(usuario: IUsuario): Usuario {
    return new Usuario(
      usuario.id,
      usuario.correo,
      usuario.clave,
      usuario.nombre,
    )
  }
}
