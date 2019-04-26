import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.less']
})
export class AgreementComponent implements OnInit {
  formData;
  constructor(
    private router: Router,
    private registrationService: RegistrationService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.registrationService.currentData.subscribe(data => {
      this.formData = data;
      console.log(this.formData);

    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  previous() {
    this.router.navigate(['photo-signature']);
  }
  onSubmit() {
    let data = { ...this.formData.personalDetail, ...this.formData.userImage, ...this.formData.userSignature }//, ...this.formData.userImage, ...this.formData.userSignature }
    data = { ...data, tempAdd: this.formData.tempAdd, permanentAdd: this.formData.permanentAdd }
    delete data.fileName;
    console.log(data);
    console.log(this.registrationService.formData);

    this.httpService.postRequest('http://192.168.2.219:8000/user', data).subscribe(result => {
      console.log('result: ', result)
    }, error => {
      console.log('Erro: ', error);
    })

  }
}
