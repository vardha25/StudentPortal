import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitles, Errors } from '../../common/constants';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
@Component({
  selector: 'app-photo-signature',
  templateUrl: './photo-signature.component.html',
  styleUrls: ['./photo-signature.component.less']
})
export class PhotoSignatureComponent implements OnInit {
  photoSignature: FormGroup;
  photoUrl: string;
  signUrl: string;
  obj1;
  obj2;
  submitted = false;
  errorMessage;
  errorMessage1;
  pageTitle = PageTitles;
  userPhoto: File;
  userSignature: File;
  constructor(private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) { }

  ngOnInit() {
    console.log(this.registrationService.formData);

    this.photoSignature = this.fb.group({
      photo: [null, Validators.required],
      signature: [null, Validators.required]
    });

    this.registrationService.currentData.subscribe(data => {
      console.log(data);
      if (data['userImage'] && data['userSignature']) {
        this.photoUrl = data.userImage.fileName;
        this.signUrl = data.userSignature.fileName;
        const reader = new FileReader();
        reader.readAsDataURL(data.userImage.image);
        reader.onload = (event) => {
          this.obj1 = event.target;
          this.photoUrl = this.obj1.result;
        };
        const reader1 = new FileReader();
        reader1.readAsDataURL(data.userSignature.sign);
        reader1.onload = (event) => {
          this.obj2 = event.target;
          this.signUrl = this.obj2.result;
        };
      }

    })
  }

  onSelectPhoto(event) {
    this.errorMessage = '';
    this.photoUrl = '';
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader();
      const file = event.target.files[0];
      const sizeInKb = file.size / 1000;
      if (sizeInKb < 40 || sizeInKb > 300) {
        if (sizeInKb < 40) {
          this.errorMessage = Errors.SmallFile;
        } else {
          this.errorMessage = Errors.LargeFile;
        }
        return;
      }
      this.populateUserImage(event, 0);
    }
  }
  populateUserImage(event, flag) {
    const reader = new FileReader();
    let obj = event.target.files[0];
    const selectedPhoto = new Image(event.target.result, event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.obj1 = event.target;
      if (flag === 0) {
        this.photoUrl = this.obj1.result;
        this.userPhoto = obj;
      }
      else {
        this.signUrl = this.obj1.result;
        this.userSignature = obj;
      }
    };
  }

  onSelectSign(event) {
    this.errorMessage1 = '';
    this.signUrl = '';
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      const sizeInKb = file.size / 1000;
      if (sizeInKb < 10 || sizeInKb > 40) {
        if (sizeInKb < 10) {
          this.errorMessage1 = Errors.SmallFile;
        } else {
          this.errorMessage1 = Errors.LargeFile;
        }
        return;
      }
      this.userSignature = event.target.files[0];
      const selectedSign = new Image(event.target.result, file);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.obj2 = event.target;
        this.signUrl = this.obj2.result;
      };
    }
  }
  next() {
    this.submitted = true;
    if (this.photoSignature.invalid) {
      return;
    }
    this.registrationService.setUserImage({ image: this.userPhoto, fileName: this.photoSignature.value.photo });
    this.registrationService.setUserSignature({ sign: this.userSignature, fileName: this.photoSignature.value.signature });
    this.router.navigate(['agreement']);
  }

  previous() {
    this.registrationService.setUserImage({ image: this.userPhoto, fileName: this.photoSignature.value.photo });
    this.registrationService.setUserSignature({ sign: this.userSignature, fileName: this.photoSignature.value.signature });
    this.router.navigate(['address-details']);
  }
}