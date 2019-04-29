import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

const routes: Routes = [
  { path: 'address-details', component: AddressDetailsComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  {path: 'home', component: HomeComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
