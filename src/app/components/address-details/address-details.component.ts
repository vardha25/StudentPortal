import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.less']
})
export class AddressDetailsComponent implements OnInit {
  countries;
  states;
  cities;
  addressForm;
  constructor(private addressService: AddressService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      hometown: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required]
    })
    this.addressService.getCountries().subscribe(result => {
      this.countries = result['countries'];
    })
  }
  getStates() {

    let data = [];
    const values = this.addressForm.controls.country.value.split('|');

    this.addressService.getStates().subscribe(result => {
      let states = result['states'];
      for (let index = 0; index < states.length; index++) {
        if (states[index].country_id === values[0]) {
          data.push(states[index]);
        }
      }
      this.states = data;
    })
  }
  getCities() {
    let data = [];
    const values = this.addressForm.controls.state.value.split('|');
    console.log(values[0]);
    this.addressService.getCities().subscribe(result => {
      let cities = result['cities'];
      for (let index = 0; index < cities.length; index++) {
        if (cities[index].state_id === values[0]) {
          data.push(cities[index]);
        }
      }
      this.cities = data;
    })
  }
}
