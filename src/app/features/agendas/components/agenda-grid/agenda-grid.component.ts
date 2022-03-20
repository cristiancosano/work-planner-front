import {Component, Input, OnInit} from '@angular/core';
import {AgendaService} from "@features/agendas/services/agenda.service";
import {Agenda} from "@features/agendas/interfaces/agenda";
import {Observable, Subscription} from "rxjs";
import {LaravelPagination} from "@shared/pagination/interfaces/laravel-pagination";

@Component({
  selector: 'app-agenda-grid',
  templateUrl: './agenda-grid.component.html',
  styleUrls: ['./agenda-grid.component.scss']
})
export class AgendaGridComponent implements OnInit {

  @Input() type: 'available'|'owned' = 'available';

  public agendas: Agenda[] = [];
  public pagination: LaravelPagination<Agenda> | undefined;
  private agendasSubscription: Subscription | undefined;

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    // Subscription must be at ngOnInit because this.agenda() method uses @Input() variables.
    this.agendasSubscription = this.agenda().subscribe((currentPage: LaravelPagination<Agenda>) =>{
      this.agendas = currentPage.data;
      this.pagination = currentPage;
    })
  }

  private agenda(){
    if(this.type === 'owned') return this.agendaService.getMyAgendas();
    else return this.agendaService.getAgendas();
  }

  public changePage(page: string){
    this.agendasSubscription?.unsubscribe();
    this.agendaService.getAgendas(page).subscribe((currentPage: LaravelPagination<Agenda>) =>{
      this.agendas = currentPage.data;
      this.pagination = currentPage;
    })
  }

}
