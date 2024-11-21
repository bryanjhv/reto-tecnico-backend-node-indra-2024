import type { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

export const statusCodeSym = Symbol.for('statusCode')

// Utilitario para definir un handler de AWS Lambda.
export function defineHandler<T>(
  // Asegurarse de NO usar callbacks, AWS recomienda async/await.
  handler: (event: APIGatewayProxyEvent) => Promise<T>,
): APIGatewayProxyHandler {
  // Devolvemos un handler de AWS Lambda que maneja errores.
  return async (event) => {
    try {
      const result = await handler(event)
      return fixResult(result)
    }
    catch (error) {
      return fixError(error as Error)
    }
  }
}

// Utilitario para obtener un statusCode.
function statusCode<T>(data: T, def = 200): number {
  return (data as any)[statusCodeSym] as number ?? def
}

// Utilitario para formatear el resultado de un handler.
function fixResult<T>(body: T): APIGatewayProxyResult {
  return {
    statusCode: statusCode(body),
    body: JSON.stringify({ data: body }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

// Utilitario para formatear el error de un handler.
function fixError(error: Error): APIGatewayProxyResult {
  return {
    statusCode: statusCode(error, 500),
    body: JSON.stringify({ error: { message: error.message } }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

// Utilitario para enviar un error con statusCode.
export function sendError(code: number, message: string) {
  const error = new Error(message)
  ;(error as any)[statusCodeSym] = code
  throw error
}
