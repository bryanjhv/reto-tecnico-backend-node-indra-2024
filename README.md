# Reto Técnico Backend Node Indra 2024

Este repositorio contiene mi solución al reto técnico para el cargo de Backend Node
para la compañía Indra, de Noviembre de 2024.

## Instalación

Para ejecutar el proyecto, es necesario:

1.  De preferencia instalar `pnpm` (recomendado):

    ```bash
    corepack enable pnpm
    ```

1.  Clonar el repositorio:

    ```bash
    git clone https://github.com/bryanjhv/reto-tecnico-backend-node-indra-2024.git
    cd reto-tecnico-backend-node-indra-2024
    ```

1.  Instalar las dependencias del proyecto:

    ```bash
    pnpm install
    # o si no usas pnpm:
    npm install
    ```

1.  Desplegar el servicio en AWS:

    ```bash
    pnpm run deploy
    # o si no usas pnpm:
    npm run deploy
    ```

1.  El paso anterior dará una URL, con la cual podemos consultar la API.

## Uso y manejo

Una vez tengamos el proyecto desplegado, podemos consultar los endpoints:

```bash
# Recurso: planetas (SWAPI)
GET /api/planetas  # Para listar los planetas
GET /api/planetas/1  # Para obtener el planeta con ID #1

# Recurso: vehículos (SWAPI)
GET /api/vehiculos  # Para listar los vehículos
GET /api/vehiculos/4  # Para obtener el vehículo con ID #4

# Recurso: usuarios (API)
GET /api/usuarios  # Para listar los usuarios
GET /api/usuarios/34a177db-9516-40fb-9a04-d517e1cfe314  # Para obtener el usuario con dicho ID
POST /api/usuarios  # Para crear un usuario
```
