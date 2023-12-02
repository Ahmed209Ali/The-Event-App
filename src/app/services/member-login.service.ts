import { Injectable } from '@angular/core';
import { __extends } from 'tslib';
import { ApifunctionService } from './apifunction.service';
import { mamber_login } from '../main/models/member_login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberLoginService extends ApifunctionService<mamber_login> {
  constructor(public override http:HttpClient,public override router:Router){
    super(" http://localhost:3000/Member_Login",http,router)
  }
  auth(){
    if(localStorage.getItem("user")){}

  else{
  this.router.navigateByUrl("/member")
  }
  }
}
