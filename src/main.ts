import { api } from '../config/environment'
import serverBuild from './api/server'
;(async function init() {
  try {
    const server = await serverBuild()
    server.listen({
      host: api.host,
      port: api.port,
    })
  } catch (e) {
    const error = e as Error
    console.error(error)
  }
})()
