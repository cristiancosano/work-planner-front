import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaGridComponent } from './components/agenda-grid/agenda-grid.component';
import { AgendaCardComponent } from './components/agenda-card/agenda-card.component';
import {ButtonsModule} from "@shared/buttons/buttons.module";



@NgModule({
  declarations: [

    AgendaGridComponent,
    AgendaCardComponent
  ],
  exports: [
    AgendaGridComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ]
})
export class AgendasModule { }
