import { Component } from '@angular/core';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { UserapifunctionService } from 'src/app/services/userapifunction.service';
import { mamber_login } from '../models/member_login';
import { MemberLoginService } from 'src/app/services/member-login.service';
import { SpeakerapifunctionService } from 'src/app/services/speakerapifunction.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
constructor( public srr:MemberLoginService){
 this.srr.auth()
}

}
