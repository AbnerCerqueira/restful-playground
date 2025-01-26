import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export const routes = (
  server: FastifyInstance,
  opts: FastifyPluginOptions,
  done: () => void,
) => {
  done()
}
