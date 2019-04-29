import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
    constructor(public http: HttpClient) {
        this.errorHandler = this.errorHandler.bind(this);
    }

    postRequest(apiUrl, data) {
        return this.http.post(apiUrl, data, {
            headers: {}
        });
    }
    errorHandler(err) {
        console.log(err);
    }
}

