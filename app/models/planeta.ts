import type { IPlanet } from './planet.js'

// Un recurso Planeta es una gran masa, planeta o planetoide en el Universo de Star Wars, en el tiempo de 0 ABY.
export class Planeta {
  // El constructor de la clase.
  constructor(
    // El nombre de este planeta.
    public nombre: string,

    // El diámetro de este planeta en kilómetros.
    public diametro: string,

    // El número de horas estándar que tarda este planeta en completar una sola rotación sobre su eje.
    public periodo_rotacion: string,

    // El número de días estándar que tarda este planeta en completar una sola órbita de su estrella local.
    public periodo_orbital: string,

    // Un número que denota la gravedad de este planeta, donde "1" es normal o 1 G estándar. "2" es el doble o 2 Gs estándar. "0.5" es la mitad o 0.5 Gs estándar.
    public gravedad: string,

    // La población promedio de seres sintientes que habitan este planeta.
    public poblacion: string,

    // El clima de este planeta. Separado por comas si es diverso.
    public clima: string,

    // El terreno de este planeta. Separado por comas si es diverso.
    public terreno: string,

    // El porcentaje de la superficie del planeta que es agua natural o cuerpos de agua.
    public agua_superficial: string,

    // El tiempo en que se creó este recurso en formato de fecha ISO 8601.
    public creado: string,

    // El tiempo en que se editó este recurso en formato de fecha ISO 8601.
    public editado: string,
  ) {}

  // Convierte un recurso Planet de SWAPI en un recurso Planeta de la aplicación.
  static fromPlanet(planet: IPlanet): Planeta {
    return new Planeta(
      planet.name,
      planet.diameter,
      planet.rotation_period,
      planet.orbital_period,
      planet.gravity,
      planet.population,
      planet.climate,
      planet.terrain,
      planet.surface_water,
      planet.created,
      planet.edited,
    )
  }
}
