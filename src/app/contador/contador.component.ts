import { Component } from "@angular/core";
@Component({
    selector: "app-contador",
    templateUrl: './contador.component.html'
})

export class ContadorComponente{
    public titulo: string = 'Contador App';
    public numero: number = 0;
    public base: number = 5;

    acumular(numero : number){
        this.numero += numero;
    }
}
