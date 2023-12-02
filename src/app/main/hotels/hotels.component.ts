import { Component } from '@angular/core';

import { hotelshar } from '../models/hotel';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { HotelapifunctionService } from 'src/app/services/hotelapifunction.service';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  alldate!:hotelshar[]
  constructor(private ser:HotelapifunctionService,public srr:MemberLoginService){this.srr.auth()
    this.ser.get().subscribe((data:any)=>{
this.alldate=data
    })
  }


}
