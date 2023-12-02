import { Component } from '@angular/core';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent {
  constructor( public srr:MemberLoginService){
    this.srr.auth()
   }
}
