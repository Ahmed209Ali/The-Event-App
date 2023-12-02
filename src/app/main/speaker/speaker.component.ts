import { Component } from '@angular/core';
import { speakershar } from '../models/speaker';
import { SpeakerapifunctionService } from 'src/app/services/speakerapifunction.service';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent {
alldata!:speakershar[]
constructor(public ser :SpeakerapifunctionService ,public srr:MemberLoginService){this.srr.auth()
  this.ser.get().subscribe((data:any)=>{
this.alldata=data
  })
}
}
