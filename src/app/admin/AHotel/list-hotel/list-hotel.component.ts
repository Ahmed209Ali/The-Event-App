import { Component } from '@angular/core';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { HotelapifunctionService } from 'src/app/services/hotelapifunction.service';


@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css','../../sharedadmin.component.css']
})
export class ListHotelComponent {
  alldata!:any[]
  showdata(){
   this.ser.get().subscribe((data:any)=>{

      this.alldata=data

      })
  }
  constructor(public ser:HotelapifunctionService){
this.ser.all();
    this.showdata();

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
