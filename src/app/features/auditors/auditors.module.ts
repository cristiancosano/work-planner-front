import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAuditorComponent } from './login-auditor/login-auditor.component';
import {AlertsModule} from "@shared/alerts/alerts.module";
import {ButtonsModule} from "@shared/buttons/buttons.module";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        LoginAuditorComponent
    ],
    exports: [
        LoginAuditorComponent
    ],
  imports: [
    CommonModule,
    AlertsModule,
    ButtonsModule,
    FormsModule
  ]
})
export class AuditorsModule { }
