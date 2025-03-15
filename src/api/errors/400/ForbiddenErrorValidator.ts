import { ChainOfErrorsHandler } from '../ChainOfErrorsHandler'
import { HandlerParams } from '../interfaces/ChainOfErrorsHandler'

export class ForbiddenErrorValidator extends ChainOfErrorsHandler {
  public handle(params: HandlerParams): void {
    const { error, reply } = params

    if (error instanceof ForbiddenErrorValidator) {
      const { message } = error
      reply.status(403).send({ message })
      return
    }

    super.handle(params)
  }
}
