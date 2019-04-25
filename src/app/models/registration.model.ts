interface PermanetAddress {
    homeTown: string;
    country: string;
    state: string;
    city?: string;
    pincode: string;
}
interface CurrentAddress {
    homeTown: string;
    country: string;
    state: string;
    city?: string;
    pincode: string;
}
interface PersonalDetail {
    name: string,
    fatherName: string,
    motherName: string,
    email: string,
    dob: Date,
    gender: string
}

export class RegistrationModel {
    personalDetail: PersonalDetail;
    currentAddress: CurrentAddress;
    permanentAddress: PermanetAddress;

    constructor() { }
}