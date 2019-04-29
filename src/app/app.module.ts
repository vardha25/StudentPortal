import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { HomeComponent } from './components/home/home.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressService } from './services/address.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddressDetailsComponent,
    PersonalDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
