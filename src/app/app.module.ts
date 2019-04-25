import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressService } from './services/address.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgreementComponent } from './components/agreement/agreement.component';
import { RecaptchaModule } from 'ng-recaptcha'
@NgModule({
  declarations: [
    AppComponent,
    AddressDetailsComponent,
    PersonalDetailsComponent,
    AgreementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
