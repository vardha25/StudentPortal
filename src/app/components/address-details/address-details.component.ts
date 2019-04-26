import { Component, OnInit, ViewChild } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationModel } from 'src/app/models/registration.model';
import { Errors } from 'src/app/common/constants';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.less']
})
export class AddressDetailsComponent implements OnInit {
  countries = [];
  states = [];
  cities = [];
  addressForm = [];
  validationMessages = Errors;
  formTitles = ['Current Address', 'Permanent Address'];
  submitted = false;
  formData;

  constructor(
    private addressService: AddressService,
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit() {


    for (let index = 0; index < 2; index++) {
      this.addressForm[index] = this.formBuilder.group({
        hometown: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: [''],
        pincode: ['', Validators.required],
      })
    }
    this.addressService.getCountries().subscribe(result => {
      this.countries = result['countries'];
    })

    this.registrationService.currentData.subscribe(data => {
      if (data.tempAdd) {
        this.populateAddress(data);
      }
    })


  }

  populateAddress(data) {
    for (let index = 0; index < 2; index++) {

      let obj = (index === 0) ? data.currentAddress : data.permanentAddress;
      this.formControls(index).hometown.setValue(obj.hometown);
      this.formControls(index).country.setValue(obj.country);
      this.formControls(index).state.setValue(obj.state);
      this.formControls(index).city.setValue(obj.city);
      this.formControls(index).pincode.setValue(obj.pincode);
    }
  }

  getStates(index) {
    let data = [];
    let values = JSON.parse(this.formControls(index).country.value);
    this.addressForm[index].controls.country.value = values.name;
    this.addressService.getStates().subscribe(result => {
      let states = result['states'];
      for (let index = 0; index < states.length; index++) {
        if (states[index].country_id === values.id) {
          data.push(states[index]);
        }
      }
      this.states[index] = data;
    })
  }
  getCities(index) {
    let data = [];
    const values = JSON.parse(this.addressForm[index].controls.state.value);
    this.addressForm[index].controls.state.value = values.name;
    this.addressService.getCities().subscribe(result => {
      let cities = result['cities'];
      for (let index = 0; index < cities.length; index++) {
        if (cities[index].state_id === values.id) {
          data.push(cities[index]);
        }
      }
      this.cities[index] = data;
    })
  }

  formControls(index) {
    return this.addressForm[index].controls;
  }

  next() {
    this.submitted = true;
    if (this.addressForm[0].invalid || this.addressForm[1].invalid) {
      return;
    }
    this.registrationService.setCurrentAddressData(this.addressForm[0].value);
    this.registrationService.setPermanentAddressData(this.addressForm[1].value);
    this.router.navigate(['photo-signature']);
  }

  previous() {
    this.registrationService.setCurrentAddressData(this.addressForm[0].value);
    this.registrationService.setPermanentAddressData(this.addressForm[1].value);

    this.router.navigate(['personal-details']);
  }
}
