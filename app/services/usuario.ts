import type { IAdapter } from '../adapters/adapter.js'
import type { IUsuario } from '../models/usuario.js'
import type { IService } from './service.js'
import { env } from 'node:process'
import { Usuario } from '../models/usuario.js'

// Nombre de la tabla desde variables de entorno.
const { USUARIOS_TABLE = 'usuarios-table-dev' } = env

// Servicio para gestionar usuarios.
export class UsuarioService implements IService<Usuario> {
  // El constructor de la clase.
  constructor(
    private adapter: IAdapter,
  ) {}

  // Lista todos los usuarios.
  async list(page = '1'): Promise<Usuario[] | undefined> {
    const usuarios = await this.adapter.list<IUsuario>(USUARIOS_TABLE, page)
    return usuarios?.map(usuario => Usuario.create(usuario))
  }

  // Busca un usuario por su ID.
  async find(id: string): Promise<Usuario | undefined> {
    const usuario = await this.adapter.find<IUsuario>(USUARIOS_TABLE, id)
    return usuario ? Usuario.create(usuario) : undefined
  }

  // Crea un usuario.
  async create(data: IUsuario): Promise<boolean> {
    return this.adapter.create!<IUsuario>(USUARIOS_TABLE, data)
  }
}
