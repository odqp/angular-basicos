import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]= ["Heroes1","Heroes2","Heroes3","Heroes4"]
  heroeBorrado: string = "";

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || "";
  }
}

