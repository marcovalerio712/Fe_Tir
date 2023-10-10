import { Commessa } from "./commessa";
import { Dipendente } from "./dipendente";

export class Assegnazione {
    id?: number;
    dipendente?: Dipendente;
    commessa?: Commessa;
    competenza?: number;
    attivo?: boolean;
}
