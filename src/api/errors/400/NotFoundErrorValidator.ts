import { ChainOfErrorsHandler } from '../ChainOfErrorsHandler'
import { HandlerParams } from '../interfaces/ChainOfErrorsHandler'

export class NotFoundError extends ChainOfErrorsHandler {
  public handle(params: HandlerParams): void {
    const { error, reply } = params

    if (error instanceof NotFoundError) {
      const { message } = error
      reply.status(404).send({ message })
      return
    }

    super.handle(params)
  }
}
