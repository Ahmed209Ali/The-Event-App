import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hotelshar } from '../main/models/hotel';
import { ApifunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class HotelapifunctionService extends ApifunctionService<hotelshar> {
constructor(public override http:HttpClient,public override router:Router){
  super(" http://localhost:3000/Hotels",http,router)
}
}
