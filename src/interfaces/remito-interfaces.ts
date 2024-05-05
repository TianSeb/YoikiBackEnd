export interface RemitoRequest {
  bruto:         string;
  catastro:      Catastro;
  destinatario:  Destinatario;
  header:        Header;
  key:           string;
  lote:          Lote;
  madera:        string;
  neto:          number;
  producto:      string;
  tara:          string;
  transportista: Transportista;
}

export interface Catastro {
  chac:      string;
  dept:      string;
  municipio: string;
  par:       string;
  seccion:   string;
}

export interface Destinatario {
  cuit:      string;
  domicilio: string;
  localidad: string;
  nombre:    string;
}

export interface Header {
  fecha:  string;
  numero: string;
}

export interface Lote {
  año:           number;
  especie:       string;
  lote:          string;
  loteCatastral: string;
  municipio:     string;
  oc:            string;
}

export interface Transportista {
  cuit:          string;
  patente:       Patente;
  transportista: string;
}

export interface Patente {
  acoplado: string;
  chasis:   string;
}
