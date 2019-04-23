import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {
    }
  ngOnInit() {
    this.photoSignature = this.fb.group(
      {
        photo: [null, Validators.required],
        signature: [null, Validators.required]
      });
  }

  onSelectPhoto(event) {
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader();
      const file = event.target.files[0];
      const sizeInKb = file.size / 1024;
      console.log('size', sizeInKb);
      console.log('type', file.type);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = ( event ) => {
        this.obj = event.target;
        this.photoUrl = this.obj.result;
      };
    }
}
onSelectSign(event) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = ( event ) => {
      this.obj = event.target;
      this.signUrl = this.obj.result;
    };
  }
}
onSubmit() {
  
}


}
