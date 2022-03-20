import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAgendasRoutingModule } from './my-agendas-routing.module';
import { MyAgendasComponent } from './my-agendas.component';
import {HeadersModule} from "@features/headers/headers.module";
import {FootersModule} from "@features/footers/footers.module";
import {AgendasModule} from "@features/agendas/agendas.module";


@NgModule({
  declarations: [
    MyAgendasComponent
  ],
  imports: [
    CommonModule,
    MyAgendasRoutingModule,
    HeadersModule,
    FootersModule,
    AgendasModule
  ]
})
export class MyAgendasModule { }
