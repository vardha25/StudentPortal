import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { HttpService } from '../../services/http.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.less']
})
export class AgreementComponent implements OnInit {
  formData;
  public uploader: FileUploader = new FileUploader({ url: 'http://192.168.2.219:8000/user', itemAlias: 'photo' });
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
    let keys = Object.keys(data);
    let formdata = new FormData();
    console.log(formdata);

    for (let key of keys) {
      console.log(key, data[key]);
      if (typeof data[key] === 'object' && !(data[key] instanceof File)) {
        formdata.append(key, JSON.stringify(data[key]));
      } else {
        formdata.append(key, data[key]);
      }
    }

    this.httpService.postRequest('http://192.168.2.219:8000/user', formdata).subscribe(result => {
      console.log('result: ', result)
    }, error => {
      console.log('Error: ', error);
    })

  }
}
