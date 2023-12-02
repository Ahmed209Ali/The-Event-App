import { Component } from '@angular/core';
import { user } from 'src/app/main/models/user';
import { UserapifunctionService } from 'src/app/services/userapifunction.service';
@Component({
  selector: 'app-adduser',
  templateUrl:'./adduser.component.html',
  styleUrls: ['./adduser.component.css',"../../sharedadmin.component.css"]
})
export class AdduserComponent {
  massage:string=""
  constructor(public ser :UserapifunctionService){  this.ser.all();}
  user=new user()
  create(){
    this.ser.post(this.user).subscribe((data:any)=>{

      this.massage="Create User Successfly"
      setTimeout(()=>{
      this.massage=''

      },2000)

          })
    }
}
