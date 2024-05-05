import { Request, Response } from 'express';


export default class Healthcheck {
  async health(req: Request, res: Response): Promise<any> {
    const healthInfo = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };

    res.status(200).json(healthInfo);
  }
}