import type { Request, Response } from "express";
import { RemitoModel } from "../models/Remito";
import { RemitoRequest } from "../interfaces/remito-interfaces";

export default class RemitoController {
  async getRemitos(req: Request, res: Response): Promise<any> {
    const remitos = await RemitoModel.find({});
    res.status(200).json(remitos);
  }

  async getRemitoByNumero(req: Request, res: Response): Promise<any> {
    const response = await RemitoModel.findOne({ numero: req.params.numero });
    return res.json({ remito: response });
  }

  async addRemito(req: Request, res: Response): Promise<any> {
    const newRemito = new RemitoModel(req.body);
    const savedRemito = await newRemito.save();
    res.status(201).json(savedRemito);
  }

  async addRemitos(req: Request, res: Response): Promise<any> {
    const remitos: RemitoRequest[] = req.body;
    const remitosToSave = remitos.map(mapRemitoRequestToModel);
    const savedRemitos = await RemitoModel.insertMany(remitosToSave);
    res.status(201).json(savedRemitos.length);
  }
}

const mapRemitoRequestToModel = (data: RemitoRequest) => {
  return {
    fecha: data.header.fecha,
    numero: data.header.numero,
    destinatario: data.destinatario.nombre,
    producto: data.producto,
    madera: data.madera,
    bruto: Number(data.bruto),
    tara: Number(data.tara),
    neto: Number(data.neto),
    lote: data.lote,
    catastro: data.catastro,
    transportista: data.transportista.transportista,
  };
};
