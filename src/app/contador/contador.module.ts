import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponente } from './contador.component';

@NgModule({
    declarations: [ContadorComponente],
    imports: [ CommonModule ],
    exports: [ContadorComponente],
    providers: [],
})
export class ContadorModule {}