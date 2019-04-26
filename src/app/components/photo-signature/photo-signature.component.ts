import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitles, Errors } from '../../common/constants';
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
  obj;
  submitted = false;
  errorMessage;
  errorMessage1;
  pageTitle = PageTitles;
  constructor(private fb: FormBuilder,
    private registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationService.currentData.subscribe(data => {
      console.log(data);
    })

    this.photoSignature = this.fb.group(
      {
        photo: [null, Validators.required],
        signature: [null, Validators.required]
      });
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
      console.log('size', sizeInKb);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.obj = event.target;
        this.photoUrl = this.obj.result;
      };
    }
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
      const selectedFile = new Image(event.target.result, file);
      console.log(selectedFile);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.obj = event.target;
        this.signUrl = this.obj.result;
      };
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.photoSignature.invalid) {
      return;
    }
    console.log(this.photoSignature);
  }
}
