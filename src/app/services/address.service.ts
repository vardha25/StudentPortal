import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AddressAPI } from '../common/constants';

@Injectable()
export class AddressService {
    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get(AddressAPI.Countries);
    }
    getStates() {
        return this.http.get(AddressAPI.States);
    }
    getCities() {
        return this.http.get(AddressAPI.Cities);
    }
}