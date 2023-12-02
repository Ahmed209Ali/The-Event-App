import { Component } from '@angular/core';
import { MemberLoginService } from 'src/app/services/member-login.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor( public srr:MemberLoginService){
    this.srr.auth()
   }
}
