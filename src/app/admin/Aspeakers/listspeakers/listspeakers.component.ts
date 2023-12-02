import { Component } from '@angular/core';

import { SpeakerapifunctionService } from 'src/app/services/speakerapifunction.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-listspeakers',
  templateUrl: './listspeakers.component.html',
  styleUrls: ['./listspeakers.component.css','../../sharedadmin.component.css']
})
export class ListspeakersComponent {
  alldata!:any[]
  showdata(){
   this.ser.get().subscribe((data:any)=>{

      this.alldata=data

      })
  }
  constructor(public ser:SpeakerapifunctionService){
    this.showdata();
    this.ser.all();
  }

  massage:string=""
 remove(id:any){
  this.ser.delete(id).subscribe((data)=>{
    this.massage="Delete Student Successfly"
    this.showdata()
    setTimeout(()=>{
    this.massage=''

    },2000)
  })

 }
}
