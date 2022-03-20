import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeadersModule } from "@features/headers/headers.module";
import { FootersModule } from "@features/footers/footers.module";
import { AgendasModule } from "@features/agendas/agendas.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeadersModule,
        FootersModule,
        AgendasModule,
    ]
})
export class HomeModule { }
