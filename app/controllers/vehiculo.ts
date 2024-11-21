import type { Vehiculo } from '../models/vehiculo.js'
import type { IService } from '../services/service.js'
import type { IController } from './controller.js'

// Controlador para gestionar vehículos de la API.
export class VehiculoController implements IController {
  // El constructor de la clase.
  constructor(
    private readonly service: IService<Vehiculo>,
  ) {}

  // Lista todos los vehículos de la API.
  async listVehiculos(page = '1'): Promise<Vehiculo[] | undefined> {
    return this.service.list(page)
  }

  // Busca un vehículo por su ID en la API.
  async findVehiculo(id: string): Promise<Vehiculo | undefined> {
    return this.service.find(id)
  }
}
