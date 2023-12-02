import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hotelshar } from 'src/app/main/models/hotel';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { HotelapifunctionService } from 'src/app/services/hotelapifunction.service';


@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css','../../sharedadmin.component.css']
})
export class UpdateHotelComponent {

  hotel=new hotelshar()
  massage: string = '';
  id!: any;
  constructor(
    public ser: HotelapifunctionService,
    public Activrout: ActivatedRoute,
    public router:Router,
  ) {
    this.id = this.Activrout.snapshot.paramMap.get('id');
    this.ser.gitbyid(this.id).subscribe((data:any)=>{
      this.hotel=data

    })
  }
  updatastudent() {

      this.ser.put(this.id, this.hotel).subscribe(data=>{
        this.massage="Update Hotel Successfly"
        setTimeout(()=>{
        this.massage=''

        },2000)})

    this.ser.put(this.id, this.hotel).subscribe(data=>{
      setTimeout(()=>{
        this.massage=''
        this.router.navigateByUrl('/admin/AHotel/list')
        },2000)})



  }


}
