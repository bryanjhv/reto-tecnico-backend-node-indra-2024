import type { IAdapter } from './adapter.js'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, GetCommand, PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb'

// Adaptador para llamar a una base de datos.
export class DatabaseAdapter implements IAdapter {
  private client: DynamoDBClient
  private docClient: DynamoDBDocumentClient

  // El constructor de la clase.
  constructor() {
    this.client = new DynamoDBClient()
    this.docClient = DynamoDBDocumentClient.from(this.client)
  }

  // Lista todos los registros de una tabla por página.
  async list<T>(table: string, _page = '1'): Promise<T[] | undefined> {
    const command = new ScanCommand({
      TableName: table,
      // TODO: usar paginación.
    })
    const { Items } = await this.docClient.send(command)
    return Items as T[] | undefined
  }

  // Busca un registro por su ID en una tabla.
  async find<T>(table: string, id: string): Promise<T | undefined> {
    const command = new GetCommand({
      TableName: table,
      Key: { id },
    })
    const { Item } = await this.docClient.send(command)
    return Item as T | undefined
  }

  // Crea un registro en una tabla.
  async create<T>(table: string, data: T): Promise<boolean> {
    const command = new PutCommand({
      TableName: table,
      Item: data as Record<string, any>,
    })
    try {
      await this.docClient.send(command)
      return true
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (error) {
      return false
    }
  }
}
