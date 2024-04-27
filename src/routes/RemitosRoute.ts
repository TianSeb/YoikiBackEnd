import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import RemitoController from '../controller/RemitoController';

const remitosRoute = Router()
const remitoController = new RemitoController();

remitosRoute
  .get(
    '/remitos',
    asyncHandler(remitoController.getRemitos)
  )
  .get('/remitos/:numero', asyncHandler(remitoController.getRemitoByNumero))
  .post(
    '/remitos/',
    asyncHandler(remitoController.addRemitos)
  )

  export default remitosRoute