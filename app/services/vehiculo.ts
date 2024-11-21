import type { IAdapter } from '../adapters/adapter.js'
import type { IVehicle } from '../models/vehicle.js'
import type { IService } from './service.js'
import { Vehiculo } from '../models/vehiculo.js'

// Servicio para gestionar vehículos de la API.
export class VehiculoService implements IService<Vehiculo> {
  // El constructor de la clase.
  constructor(
    private adapter: IAdapter,
  ) {}

  // Lista todos los vehículos de la API.
  async list(page = '1'): Promise<Vehiculo[] | undefined> {
    const vehicles = await this.adapter.list<IVehicle>('vehicles', page)
    return vehicles?.map(vehicle => Vehiculo.fromVehicle(vehicle))
  }

  // Busca un vehículo por su ID en la API.
  async find(id: string): Promise<Vehiculo | undefined> {
    const vehicle = await this.adapter.find<IVehicle>('vehicles', id)
    return vehicle ? Vehiculo.fromVehicle(vehicle) : undefined
  }
}
