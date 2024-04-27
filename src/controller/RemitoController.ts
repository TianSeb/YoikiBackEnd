import type { Request, Response } from "express";
import { RemitoModel } from "../persistence/models/Remito";

export default class RemitoController {
  async getRemitos(req: Request, res: Response): Promise<any> {
    const remitos = await RemitoModel.find({});
    res.status(200).json(remitos);
  }

  async getRemitoByNumero(req: Request, res: Response): Promise<any> {
    const response = await RemitoModel.findOne({ numero: req.params.numero });
    return res.json({ remito: response });
  }

  async addRemitos(req: Request, res: Response): Promise<any> {
    const newRemito = new RemitoModel(req.body);
    const savedRemito = await newRemito.save();
    res.status(201).json(savedRemito);
  }
}
