import { Injectable } from "@angular/core";
import { RegistrationModel } from '../models/registration.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RegistrationService {
    formData: RegistrationModel;
    private messageSource = new BehaviorSubject(this.formData);
    currentData = this.messageSource.asObservable();
    constructor() {
        this.formData = new RegistrationModel();
    }
    setPersonalDetailData(obj) {
        this.formData.personalDetail = obj;
        this.messageSource.next(this.formData);
    }
    setCurrentAddressData(obj) {

        this.formData.tempAdd = obj;
        this.messageSource.next(this.formData);

    }
    setPermanentAddressData(obj) {
        this.formData.permanentAdd = obj;
        this.messageSource.next(this.formData);
    }
    setUserImage(obj) {
        this.formData.userImage = obj;
    }
    setUserSignature(obj) {
        this.formData.userSignature = obj;
    }
}