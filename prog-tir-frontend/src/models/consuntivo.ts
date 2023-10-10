import { Dipendente } from "./dipendente";

export class Consuntivo {
    id?: number;    
    orarioInizio?: Date;
    orarioFine?: Date;
    tipologia?: string;
    dipendente?: Dipendente;
}
