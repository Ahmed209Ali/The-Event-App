import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { speakershar } from 'src/app/main/models/speaker';
import { HotelapifunctionService } from 'src/app/services/hotelapifunction.service';
import { SpeakerapifunctionService } from 'src/app/services/speakerapifunction.service';

@Component({
  selector: 'app-updatespeakers',
  templateUrl: './updatespeakers.component.html',
  styleUrls: ['./updatespeakers.component.css','../../sharedadmin.component.css']
})
export class UpdatespeakersComponent {

  speaker=new speakershar()
  massage: string = '';
  id!: any;
  constructor(
    public ser: SpeakerapifunctionService,
    public Activrout: ActivatedRoute,
    public router:Router,
  ) {
    this.id = this.Activrout.snapshot.paramMap.get('id');
    this.ser.gitbyid(this.id).subscribe((data:any)=>{
      this.speaker=data

    })
  }
  updatastudent() {

      this.ser.put(this.id, this.speaker).subscribe(data=>{
        this.massage="Update speaker Successfly"
        setTimeout(()=>{
        this.massage=''

        },2000)})

    this.ser.put(this.id, this.speaker).subscribe(data=>{
      setTimeout(()=>{
        this.massage=''
        this.router.navigateByUrl('/admin/Aspeakers/list')
        },2000)})



  }

}
