import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.less']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetails: FormGroup;
  keys = [];

  public fields: any[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
    },
    {
      type: 'text',
      name: 'fatherName',
      label: 'Father Name'
    },
    {
      type: 'text',
      name: 'motherName',
      label: 'Mother Name'
    },
    {
      type: 'date',
      name: 'dob',
      label: 'DOB'
    },
    {
      type: 'radio',
      name: 'gender',
      name1: 'male',
      name2: 'female',
      label: 'Gender'
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalDetails = this.fb.group(
      {
        name: ['', Validators.required],
        fatherName: ['', Validators.required],
        motherName: ['', Validators.required],
        dob: ['', Validators.required],
        gender: ['', Validators.required]
      }
    );
  }
  get controls() {
    return this.personalDetails.controls;
  }
  onClick() {
    console.log(this.personalDetails.value);
  }

}
