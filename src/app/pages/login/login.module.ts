import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuditorsModule } from "@features/auditors/auditors.module";
import { HeadersModule } from "@features/headers/headers.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AuditorsModule,
    HeadersModule
  ]
})
export class LoginModule { }
