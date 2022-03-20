import { Component, Input, OnInit } from '@angular/core';
import {Agenda} from "@features/agendas/interfaces/agenda";

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.scss']
})
export class AgendaCardComponent implements OnInit {
  @Input() agenda: Agenda | null = null;
  @Input() type: 'available'|'owned' = 'available';

  constructor() { }

  ngOnInit(): void {
  }

}
