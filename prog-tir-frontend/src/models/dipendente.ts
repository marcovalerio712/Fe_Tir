import { Ruolo } from "./ruolo";

export class Dipendente {
    id?: number;
    nome?: string;
    cognome?: string;
    cf?: string;
    email?: string;
    password?: string;
    telefono?: string;
    ruolo?: Ruolo; // Utilizza il modello Ruolo invece di una stringa
    registrato?: boolean;
    attivo?: boolean;
}
