import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Errors, APIS } from '../../common/constants';
import { LoginModel } from 'src/app/models/login.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  errors = Errors;
  constructor(private fb: FormBuilder,
    private httpService: HttpService) { }

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
    const data = new LoginModel(this.login.value);
    this.httpService.postRequest(APIS.LoginUser, data);


  }
}
