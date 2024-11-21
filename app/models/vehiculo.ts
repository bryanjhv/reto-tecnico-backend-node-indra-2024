import type { IVehicle } from './vehicle.js'

// Un recurso Vehículo es una única nave de transporte que no tiene capacidad de hiperimpulso.
export class Vehiculo {
  // El constructor de la clase.
  constructor(
    // El nombre de este vehículo. El nombre común, como "Sand Crawler" o "Speeder bike".
    public nombre: string,

    // El modelo o nombre oficial de este vehículo. Como "All-Terrain Attack Transport".
    public modelo: string,

    // La clase de este vehículo, como "Wheeled" o "Repulsorcraft".
    public clase_vehiculo: string,

    // El fabricante de este vehículo. Separado por comas si hay más de uno.
    public fabricante: string,

    // La longitud de este vehículo en metros.
    public longitud: string,

    // El costo de este vehículo nuevo, en Créditos Galácticos.
    public costo_en_creditos: string,

    // El número de personal necesario para operar o pilotar este vehículo.
    public tripulacion: string,

    // El número de personas no esenciales que este vehículo puede transportar.
    public pasajeros: string,

    // La velocidad máxima de este vehículo en la atmósfera.
    public velocidad_maxima_atmosferica: string,

    // El número máximo de kilogramos que este vehículo puede transportar.
    public capacidad_de_carga: string,

    // El tiempo máximo que este vehículo puede proporcionar consumibles para toda su tripulación sin tener que reabastecerse.
    public consumibles: string,

    // El tiempo en que se creó este recurso en formato de fecha ISO 8601.
    public creado: string,

    // El tiempo en que se editó este recurso en formato de fecha ISO 8601.
    public editado: string,
  ) {}

  // Convierte un recurso Vehicle de SWAPI en un recurso Vehiculo de la aplicación.
  static fromVehicle(vehicle: IVehicle): Vehiculo {
    return new Vehiculo(
      vehicle.name,
      vehicle.model,
      vehicle.vehicle_class,
      vehicle.manufacturer,
      vehicle.length,
      vehicle.cost_in_credits,
      vehicle.crew,
      vehicle.passengers,
      vehicle.max_atmosphering_speed,
      vehicle.cargo_capacity,
      vehicle.consumables,
      vehicle.created,
      vehicle.edited,
    )
  }
}
