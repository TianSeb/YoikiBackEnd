import express from 'express'
import type { Express } from 'express'
import type http from 'http'
import { createServer } from 'http'
import routes from './routes/Routes'

class Server {
  private readonly app: Express
  private readonly httpServer: http.Server
  private readonly port: string


  constructor() {
    this.app = express()
    this.app.set('view engine', 'ejs')
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static('public'))
    this.app.use(routes)
    this.httpServer = createServer(this.app)
    this.port = '8001'
  }

  start(): void {
    this.httpServer.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }

  getHttpServer(): http.Server {
    return this.httpServer
  }

}

export default Server