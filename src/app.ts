import { initMongoDb } from './persistence/PersistenceManager'
import Server from './Server'

const server: Server = new Server()

const init = async (): Promise<void> => {
  await initMongoDb()
  server.start()
}

void init()