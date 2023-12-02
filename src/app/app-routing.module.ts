import { CreateHotelComponent } from './admin/AHotel/create-hotel/create-hotel.component';
import { BuyTicketsComponent } from './main/buy-tickets/buy-tickets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './main/hero/hero.component';
import { SpeakerComponent } from './main/speaker/speaker.component';
import { SchedualComponent } from './main/schedual/schedual.component';
import { VenueComponent } from './main/venue/venue.component';
import { HotelsComponent } from './main/hotels/hotels.component';
// import { GalleryComponent } from './main/gallery/gallery.component';
import { SupportersComponent } from './main/supporters/supporters.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListHotelComponent } from './admin/AHotel/list-hotel/list-hotel.component';
import { UpdateHotelComponent } from './admin/AHotel/update-hotel/update-hotel.component';
import { CreatespeakersComponent } from './admin/Aspeakers/createspeakers/createspeakers.component';
import { ListspeakersComponent } from './admin/Aspeakers/listspeakers/listspeakers.component';
import { UpdatespeakersComponent } from './admin/Aspeakers/updatespeakers/updatespeakers.component';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { LoginComponent } from './admin/user/login/login.component';
import { CreatenewacountComponent } from './createnewacount/createnewacount.component';
import { LoginUserComponent } from './login-user/login-user.component';



const routes: Routes = [
  {path:"hero",component:HeroComponent},
  {path:"",component:LoginUserComponent},
  {path:"member",component:LoginUserComponent},
  {path:"accout",component:CreatenewacountComponent},
  {path:"speakers",component:SpeakerComponent},
  {path:"schedule",component:SchedualComponent},
  {path:"venue",component:VenueComponent},
  {path:"hotels",component:HotelsComponent},
  // {path:"gallery",component:GalleryComponent},
  {path:"supporters",component:SupportersComponent},
  {path:"contact",component:ContactComponent},
  {path:"buy-tickets",component:BuyTicketsComponent},
  {path:"admin",component:AhomeComponent},
// Hotels Admin
  {path:"admin/AHotel/create",component:CreateHotelComponent},
  {path:"admin/AHotel/list",component:ListHotelComponent},
  {path:"admin/AHotel/update/:id",component:UpdateHotelComponent},
// speakers Addmin
  {path:"admin/Aspeakers/create",component:CreatespeakersComponent},
  {path:"admin/Aspeakers/list",component:ListspeakersComponent},
  {path:"admin/Aspeakers/update/:id",component:UpdatespeakersComponent},
  {path:"admin/user/add",component:AdduserComponent},
  {path:"admin/user/login",component:LoginComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
