import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApifunctionService } from './apifunction.service';
import { user } from '../main/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserapifunctionService extends ApifunctionService<user> {

  constructor(public override http:HttpClient,public override router:Router){
    super(" http://localhost:3000/user",http,router)
  }
}
