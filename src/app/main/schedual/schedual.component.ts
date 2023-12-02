import { Component } from '@angular/core';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-schedual',
  templateUrl: './schedual.component.html',
  styleUrls: ['./schedual.component.css']
})
export class SchedualComponent {
  constructor( public srr:MemberLoginService){
    this.srr.auth()
   }
}
