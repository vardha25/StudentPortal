import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { PhotoSignatureComponent } from './components/photo-signature/photo-signature.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'personal-details', component: PersonalDetailsComponent},
  {path: 'photo-signature' , component: PhotoSignatureComponent},
  {path: 'login' , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
