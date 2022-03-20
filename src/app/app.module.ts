import { LOCALE_ID, NgModule } from '@angular/core';

import localeEs from '@angular/common/locales/es';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import { TokenInterceptor } from "@core/interceptors/token.interceptor";
import { LoadingInterceptor } from "@core/interceptors/loading.interceptor";
import {SpinnerComponent} from "@shared/spinner/spinner.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
