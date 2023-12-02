import { user } from './../../../main/models/user';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserapifunctionService } from 'src/app/services/userapifunction.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css',"../../sharedadmin.component.css"]
})
export class LoginComponent {

  massage:string=""
  username!:string
  userpassword!:string
  constructor(private ser: UserapifunctionService,public router :Router){  }
login(){
this.ser.get().subscribe((data:any)=>{


  let user=data.find((userdata:any)=>{
   return userdata.name==this.username&&userdata.password==this.userpassword

  })
 

  if(user){

    this.massage="You Are Admin"
    setTimeout(()=>{
      this.massage=''

      },2000)
      localStorage.setItem("admin","Ahmed")
      setTimeout(()=>{
        this.router.navigateByUrl("/admin")

        },2000)

  }else{
    this.massage="You Are Not Admin"
    setTimeout(()=>{
      this.massage=''

      },2000)
  }
})
}
}
