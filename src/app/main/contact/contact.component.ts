import { Component } from '@angular/core';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor( public srr:MemberLoginService){
    this.srr.auth()
   }
}
