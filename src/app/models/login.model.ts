export class LoginModel {
    appNo: Number;
    password: string;
    constructor(obj) {
        this.appNo = obj.applicationID;
        this.password = obj.password;
    }
}