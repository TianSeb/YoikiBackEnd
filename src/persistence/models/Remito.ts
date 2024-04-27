import mongoose, { Schema, Document } from 'mongoose';

interface Destinatario {
  nombre: string;
  domicilio: string;
  cuit: string;
  localidad: string;
}

interface DetalleLote {
  lote: string;
  especie: string;
  año: number;
  loteCatastral: string;
  municipio: string;
  oc: string;
}

interface NomenclaturaCatastral {
  dept: string;
  municipio: string;
  seccion: string;
  chac: string;
  par: string;
}

interface Patente {
  chasis: string;
  acoplado: string;
}

interface DetalleTransportista {
  transportista: string;
  cuit: string;
  patente: Patente;
}

export interface IRemito extends Document {
  fecha: string;
  numero: string;
  destinatario: string;
  producto: string;
  madera: string;
  bruto: number;
  tara: number;
  neto: number;
  lote: DetalleLote;
  catastro: NomenclaturaCatastral;
  transportista: string;
}

const RemitoSchema: Schema = new Schema({
  fecha:{ type: String, required: true },
  numero:{ type: String, required: true },
  destinatario: { type: String, required: true },
  producto: { type: String, required: true },
  madera: { type: String, required: true },
  bruto: { type: Number, required: true },
  tara: { type: Number, required: true },
  neto: { type: Number, required: true },
  lote: { type: Object, required: true },
  catastro: { type: Object, required: true },
  transportista: { type: String, required: true },
});

export const RemitoModel = mongoose.model('Remito', RemitoSchema);
