import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { PhotoSignatureComponent } from './components/photo-signature/photo-signature.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    PhotoSignatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
