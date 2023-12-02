import { Component } from '@angular/core';
import { MemberLoginService } from '../services/member-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css','../admin/sharedadmin.component.css']
})
export class LoginUserComponent {
  massage:string=""
  memberuser!:string
passworduser!:string
  constructor(private ser: MemberLoginService,public router :Router){
   }
  member_login(){
    this.ser.get().subscribe((data:any)=>{

      let user=data.find((userdata:any)=>{

      return userdata.email==this.memberuser&&userdata.password==this.passworduser
      })

     if(user){
      this.massage="You Are User"
      setTimeout(()=>{
  this.massage=''
         },2000)
localStorage.setItem("user","Ahmed")
        setTimeout(()=>{
          this.router.navigateByUrl("/hero")

          },2000)

       }
       else{
        this.massage="You Are Not User"

        setTimeout(()=>{

          this.massage=''

          },2000)

      }
    })
    }
print(formgrob:any){console.log(formgrob);
}
}
