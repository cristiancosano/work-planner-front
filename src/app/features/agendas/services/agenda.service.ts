import { Injectable } from '@angular/core';
import { environment } from "@environment/environment";
import { HttpClient } from "@angular/common/http";
import {LaravelPagination} from "@shared/pagination/interfaces/laravel-pagination";
import {Agenda} from "@features/agendas/interfaces/agenda";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private host = `${environment.apiHost}/agendas`;

  constructor(private http: HttpClient) { }

  getAgendas(host: string = this.host){
    return this.http.get<LaravelPagination<Agenda>>(host);
  }

  getMyAgendas(){
    return this.http.get<LaravelPagination<Agenda>>(`${this.host}/me`);
  }
}
