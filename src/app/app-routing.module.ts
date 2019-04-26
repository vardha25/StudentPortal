import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { PhotoSignatureComponent } from './components/photo-signature/photo-signature.component';

const routes: Routes = [
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'address-details', component: AddressDetailsComponent },
  { path: 'agreement', component: AgreementComponent },
  { path: 'photo-signature', component: PhotoSignatureComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
