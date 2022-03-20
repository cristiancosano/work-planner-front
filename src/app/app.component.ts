import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from "@core/services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loading: boolean = false;
  public title = 'work-planner-webapp';

  constructor(private loadingService: LoadingService, private cdr: ChangeDetectorRef){
    this.loadingService.getStatus$().subscribe(status => this.loading = status);
  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
