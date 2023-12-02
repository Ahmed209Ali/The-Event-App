import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-anavbar',
  templateUrl: './anavbar.component.html',
  styleUrls: ['./anavbar.component.css']
})
export class AnavbarComponent {
constructor(public router:Router){

}
logout(){
  localStorage.removeItem("admin")
  this.router.navigateByUrl("/admin/user/login")
}
}
