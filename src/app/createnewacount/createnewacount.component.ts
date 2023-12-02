import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MemberLoginService } from '../services/member-login.service';
import { mamber_login } from '../main/models/member_login';

@Component({
  selector: 'app-createnewacount',
  templateUrl: './createnewacount.component.html',
  styleUrls: ['./createnewacount.component.css','../admin/sharedadmin.component.css']
})
export class CreatenewacountComponent {

  massage:string=""
  constructor(public ser :MemberLoginService,public router:Router){  }
  member=new mamber_login()
  create(){
    this.ser.post(this.member).subscribe((data:any)=>{

      this.massage="Create Account Successfly"
      setTimeout(()=>{
      this.massage=''

      },2000)
      setTimeout(()=>{
        this.massage=''
this.router.navigateByUrl("/member")
        },2000)
          })
    }

}
