import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApifunctionService } from './apifunction.service';
import { speakershar } from '../main/models/speaker';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpeakerapifunctionService extends ApifunctionService<speakershar> {

  constructor(public override http:HttpClient,public override router:Router){
    super("http://localhost:3000/Speaker",http,router)
  }
}
