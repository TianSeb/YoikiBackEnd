import type { Request, Response, NextFunction } from 'express'
import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { RemitoModel } from '../persistence/models/Remito'

const viewsRoutes = Router()

viewsRoutes.get(
  '/',
  asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      const remitos = await RemitoModel.find({})
      res.render('pages/index', { remitos })
    }
  )
)


export default viewsRoutes