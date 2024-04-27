import mongoose from 'mongoose'
import createError from 'http-errors'
import { config } from '../config/Config'

export const initMongoDb = async (): Promise<void> => {
  mongoose
    .connect(config.mongoUri || '')
    .then(() => {
      console.log('Mongo Db connection successful')
    })
    .catch((err) => {
      throw new createError.ServiceUnavailable(err)
    })
}