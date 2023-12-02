import { Component } from '@angular/core';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})
export class BuyTicketsComponent {
  constructor( public srr:MemberLoginService){
    this.srr.auth()
   }
}
