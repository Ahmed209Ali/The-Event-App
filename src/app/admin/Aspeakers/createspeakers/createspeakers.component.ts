import { Router } from '@angular/router';
import { speakershar } from './../../../main/models/speaker';
import { Component } from '@angular/core';
import { SpeakerapifunctionService } from 'src/app/services/speakerapifunction.service';

@Component({
  selector: 'app-createspeakers',
  templateUrl: './createspeakers.component.html',
  styleUrls: ['./createspeakers.component.css','../../sharedadmin.component.css']
})
export class CreatespeakersComponent {
  massage:string=""
  constructor(public ser :SpeakerapifunctionService,public router:Router){  this.ser.all();}
  speaker=new speakershar()
  create(){
    this.ser.post(this.speaker).subscribe((data:any)=>{

      this.massage="Create speaker Successfly"
      setTimeout(()=>{
      this.massage=''

      },2000)
      setTimeout(()=>{
        this.router.navigateByUrl("/admin/Aspeakers/list")

        },2000)
          })
    }
}
