import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Errors } from '../../common/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  errors = Errors;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.login = this.fb.group({
        applicationID: ['', [Validators.required]],
        password: ['', Validators.required, Validators.min(8)]
      });
  }
  onSubmit() {
    this.submitted = true;
    if (this.login.invalid) {
      return;
    }
  }
}
