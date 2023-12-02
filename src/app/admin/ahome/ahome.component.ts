import { Component } from '@angular/core';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent  {
  constructor( public srr:MemberLoginService){
    this.srr.auth()
   }




}
