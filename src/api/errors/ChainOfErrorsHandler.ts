import {
  HandlerParams,
  ChainOfErrorsHandler as IChainOfErrorsHandler,
} from './interfaces/ChainOfErrorsHandler'

export abstract class ChainOfErrorsHandler implements IChainOfErrorsHandler {
  private next?: ChainOfErrorsHandler

  public setNext(chain: IChainOfErrorsHandler): IChainOfErrorsHandler {
    this.next = chain
    return chain
  }

  public handle(params: HandlerParams): void {
    const { error, reply } = params

    if (this.next) {
      this.next.handle(params)
      return
    }

    const { message } = error
    reply.status(500).send({ message })
  }
}
