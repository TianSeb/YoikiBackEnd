import mongoose from 'mongoose'
import createError from 'http-errors'

export const initMongoDb = async (): Promise<void> => {
  mongoose
    .connect("mongodb+srv://alebriuk:123456zxcv@yoiki.dfwuwcw.mongodb.net/?retryWrites=true&w=majority&appName=yoiki")
    .then(() => {
      console.log('Mongo Db connection successful')
    })
    .catch((err) => {
      throw new createError.ServiceUnavailable(err)
    })
}