import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.less']
})
export class AgreementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}
