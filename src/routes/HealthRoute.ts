import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import Healthcheck from '../controller/HealthCheck';

const healthRoute = Router()
const healthCheck = new Healthcheck();

healthRoute
  .get(
    '/health',
    asyncHandler(healthCheck.health)
  )

export default healthRoute;