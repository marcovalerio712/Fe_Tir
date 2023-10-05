import { Cliente } from "./cliente";

export class Commessa {
    id?: number;
    tipo?: string;
    durata?: number;
    descrizione?: string;
    importoContratto?: number;
    dataInizio?: Date;
    dataFine?: Date;
    cliente?: Cliente;
    attivo?: boolean;
}
