import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAgendasComponent } from './my-agendas.component';

const routes: Routes = [{ path: '', component: MyAgendasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAgendasRoutingModule { }
