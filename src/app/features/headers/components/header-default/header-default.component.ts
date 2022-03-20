import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TokenService } from '@core/services/token.service';


@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent implements OnInit {

  public mobileHideMenu = true;
  public loggedIn: boolean = false;

  constructor(private router: Router, private tokenService: TokenService) {
    this.tokenService.isLoggedIn$().subscribe((loggedIn: boolean) => this.loggedIn = loggedIn);
  }

  ngOnInit(): void {
  }
  toggle(){
    this.mobileHideMenu = !this.mobileHideMenu;
  }

  logout(){
    this.tokenService.delete();
    this.router.navigate(['/login']);
  }
}
