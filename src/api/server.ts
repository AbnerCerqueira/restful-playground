import fastify, { FastifyInstance } from 'fastify'
import sequelize from './database/sequelize'
import swaggerPlugin from './plugins/swaggerPlugin'
import { routes } from './routes'
import { chainOfErrors } from './errors'

const serverBuild = async (): Promise<FastifyInstance> => {
  await sequelize.authenticate()
  await sequelize.sync()

  const server = fastify({ logger: true })

  server.setErrorHandler((error, request, reply) => {
    chainOfErrors.handle({ error, reply })
  })

  await server.register(swaggerPlugin)

  await server.register(routes)

  return server
}

export default serverBuild
