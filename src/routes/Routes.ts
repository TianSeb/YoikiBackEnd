import { Router } from 'express'
import remitosRoute from './RemitosRoute'

const routes = Router()

routes.use(
  '/api',
  remitosRoute
)

export default routes