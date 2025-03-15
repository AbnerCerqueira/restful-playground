import { ConflictErrorValidator } from './400/ConflictErrorValidator'
import { ForbiddenErrorValidator } from './400/ForbiddenErrorValidator'
import { NotFoundError } from './400/NotFoundErrorValidator'

const forbiddenError = new ForbiddenErrorValidator()
const notFoundError = new NotFoundError()
const conflictError = new ConflictErrorValidator()

forbiddenError.setNext(notFoundError).setNext(conflictError)

export const chainOfErrors = forbiddenError
