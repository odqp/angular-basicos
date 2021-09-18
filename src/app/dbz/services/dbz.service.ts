import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
    constructor(){
        console.log("Servicio DBZ Inicializado");
    }

    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 7500
        }
      ]  

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    public agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}