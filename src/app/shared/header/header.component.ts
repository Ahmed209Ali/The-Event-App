import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router:Router){}
  logout(){
    localStorage.removeItem("user")
    this.router.navigateByUrl("/member")
  }
}
