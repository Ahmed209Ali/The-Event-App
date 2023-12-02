import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './main/hero/hero.component';
// import { MainComponent } from './main/main/main.component';
import { SpeakerComponent } from './main/speaker/speaker.component';
import { SchedualComponent } from './main/schedual/schedual.component';
import { VenueComponent } from './main/venue/venue.component';
import { HotelsComponent } from './main/hotels/hotels.component';
// import { GalleryComponent } from './main/gallery/gallery.component';
import { SupportersComponent } from './main/supporters/supporters.component';
import { BuyTicketsComponent } from './main/buy-tickets/buy-tickets.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AhomeComponent } from './admin/ahome/ahome.component';
import { AnavbarComponent } from './admin/anavbar/anavbar.component';
import { CreateHotelComponent } from './admin/AHotel/create-hotel/create-hotel.component';
import { ListHotelComponent } from './admin/AHotel/list-hotel/list-hotel.component';
import { UpdateHotelComponent } from './admin/AHotel/update-hotel/update-hotel.component';
import { CreatespeakersComponent } from './admin/Aspeakers/createspeakers/createspeakers.component';
import { ListspeakersComponent } from './admin/Aspeakers/listspeakers/listspeakers.component';
import { UpdatespeakersComponent } from './admin/Aspeakers/updatespeakers/updatespeakers.component';
import{ HttpClientModule} from "@angular/common/http"
import {FormsModule }from "@angular/forms"
import {Router }from "@angular/router";
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { LoginComponent } from './admin/user/login/login.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { CreatenewacountComponent } from './createnewacount/createnewacount.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    // MainComponent,
    SpeakerComponent,
    SchedualComponent,
    VenueComponent,
    HotelsComponent,
    // GalleryComponent,
    SupportersComponent,
    BuyTicketsComponent,
    ContactComponent,
    NotfoundComponent,
    AhomeComponent,
    AnavbarComponent,
    CreateHotelComponent,
    ListHotelComponent,
    UpdateHotelComponent,
    CreatespeakersComponent,
    ListspeakersComponent,
    UpdatespeakersComponent,
    AdduserComponent,
    LoginComponent,
    LoginUserComponent,
    CreatenewacountComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
