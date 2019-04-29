import { Component, OnInit } from '@angular/core';
import { PageTitles } from 'src/app/common/constants';
import { HomePageModel } from 'src/app/models/home-page.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

 data;
  pageTitles = PageTitles;
  personalDetails = {
    name: 'Vardha Jain',
    fatherName: 'msndbcja',
    motherName: 'sdfsdgf',
    email: 'sbdnfhjsd@gmail.com',
    gender: 'female',
  };
  permanentAddress = {
    city: 'jdbfc',
    country: 'gfbdf',
    state: 'dfgvdf'
  };
  currentAddress = {
    city: 'jdbfc',
    country: 'gfbdf',
    state: 'dfgvdf'
  };
  constructor() { }

  ngOnInit() {
    this.data = new HomePageModel(this.personalDetails, this.permanentAddress, this.currentAddress);
  }
}
