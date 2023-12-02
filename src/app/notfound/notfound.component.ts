import { Component } from '@angular/core';
import { MemberLoginService } from '../services/member-login.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor( public srr:MemberLoginService){
    this.srr.auth()
   }
}
