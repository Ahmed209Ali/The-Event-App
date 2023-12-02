import { Component } from '@angular/core';
import { hotelshar } from 'src/app/main/models/hotel';

import { ActivatedRoute, Router } from '@angular/router';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { HotelapifunctionService } from 'src/app/services/hotelapifunction.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css','../../sharedadmin.component.css']
})
export class CreateHotelComponent {
  hotel=new hotelshar()


constructor(public ser:HotelapifunctionService , public router:Router){
  this.ser.all();
}
massage:string=""
create(){
  this.ser.post(this.hotel).subscribe((data:any)=>{

    this.massage="Create Hotel Successfly"
    setTimeout(()=>{
    this.massage=''

    },2000)
    setTimeout(()=>{
      this.router.navigateByUrl("/admin/AHotel/list")

      },2000)
        })
  }
}


