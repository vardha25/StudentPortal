import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors, PageTitles } from '../../common/constants';
import { PersonaalDetailsModel } from 'src/app/models/personal-details.model';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.less']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetails: FormGroup;
  submitted = false;
  pageTitle = PageTitles;
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
      error: Errors.RequiredField
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalDetails = this.fb.group(
      {
        name: ['', Validators.required],
        fatherName: ['', Validators.required],
        motherName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        dob: ['', Validators.required],
        gender: ['', Validators.required]
      }
    );
  }
  get controls() {
    return this.personalDetails.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.personalDetails.invalid) {
      return;
    }
    console.log(this.personalDetails.value);
    console.log(this.personalDetails);

  }

}
