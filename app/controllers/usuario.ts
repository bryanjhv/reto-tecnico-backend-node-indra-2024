import type { IUsuario, Usuario } from '../models/usuario.js'
import type { IService } from '../services/service.js'
import type { IController } from './controller.js'
import { hashSync } from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

// Controlador para gestionar usuarios.
export class UsuarioController implements IController {
  // El constructor de la clase.
  constructor(
    private readonly service: IService<Usuario>,
  ) {}

  // Lista todos los usuarios.
  async listUsuarios(page = '1'): Promise<Usuario[] | undefined> {
    return this.service.list(page)
  }

  // Busca un usuario por su ID.
  async findUsuario(id: string): Promise<Usuario | undefined> {
    return this.service.find(id)
  }

  async createUsuario(data: IUsuario): Promise<boolean> {
    // TODO: validar correo es único.
    data.id = uuidv4()
    data.clave = hashSync(data.clave)
    return this.service.create!(data)
  }
}
