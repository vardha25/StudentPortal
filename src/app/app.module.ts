import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressService } from './services/address.service';
import { HttpService } from './services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgreementComponent } from './components/agreement/agreement.component';
import { RecaptchaModule } from 'ng-recaptcha'
import { RegistrationService } from './services/registration.service';
import { PhotoSignatureComponent } from './components/photo-signature/photo-signature.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AddressDetailsComponent,
    PersonalDetailsComponent,
    AgreementComponent,
    PhotoSignatureComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [AddressService, RegistrationService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
