import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors, PageTitles } from '../../common/constants';
import { RegistrationModel } from 'src/app/models/registration.model';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.less']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetails: FormGroup;
  submitted = false;
  pageTitle = PageTitles;
  formData: {};
  public fields: any[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
      error: Errors.RequiredField
    },
    {
      type: 'text',
      name: 'fatherName',
      label: 'Father Name',
      error: Errors.RequiredField
    },
    {
      type: 'text',
      name: 'motherName',
      label: 'Mother Name',
      error: Errors.RequiredField
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      error: Errors.RequiredField

    },
    {
      type: 'date',
      name: 'dob',
      label: 'DOB',
      error: Errors.RequiredField
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: ['Male', 'Female']
    }
  ];

  constructor(private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router) {
  }

  ngOnInit() {
    this.personalDetails = this.fb.group({
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender: ['Male']
    });

    this.registrationService.currentData.subscribe(data => {
      this.formData = data;
      if (data) {
        this.controls.name.setValue(data.personalDetail['name']);
        this.controls.fatherName.setValue(data.personalDetail['fatherName']);
        this.controls.motherName.setValue(data.personalDetail['motherName']);
        this.controls.email.setValue(data.personalDetail['email']);
        this.controls.dob.setValue(data.personalDetail['dob']);
        this.controls.gender.setValue(data.personalDetail['gender']);
      }
    })
  }
  get controls() {
    return this.personalDetails.controls;
  }

  next() {
    this.submitted = true;
    if (this.personalDetails.invalid) {
      return;
    }
    console.log(this.personalDetails.value);
    this.registrationService.setPersonalDetailData(this.personalDetails.value);
    this.router.navigate(['address-details']);
  }
}
