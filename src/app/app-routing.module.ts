import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { PhotoSignatureComponent } from './components/photo-signature/photo-signature.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'address-details', component: AddressDetailsComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'photo-signature', component: PhotoSignatureComponent },
  { path: 'login', component: LoginComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
