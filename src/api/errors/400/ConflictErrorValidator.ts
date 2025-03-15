import { ChainOfErrorsHandler } from '../ChainOfErrorsHandler'
import { HandlerParams } from '../interfaces/ChainOfErrorsHandler'

export class ConflictErrorValidator extends ChainOfErrorsHandler {
  public handle(params: HandlerParams): void {
    const { error, reply } = params

    if (error instanceof ConflictErrorValidator) {
      const { message } = error
      reply.status(409).send({ message })
    }

    super.handle(params)
  }
}
