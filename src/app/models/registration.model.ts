interface PermanetAddress {
    address: string;
    country: string;
    state: string;
    city?: string;
    pincode: string;
}
interface CurrentAddress {
    address: string;
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

interface image {
    image: File,
    fileName: string
}
interface sign {
    sign: File,
    fileName: string
}
export class RegistrationModel {
    personalDetail: PersonalDetail;
    tempAdd: CurrentAddress;
    permanentAdd: PermanetAddress;
    userImage: image;
    userSignature: sign;
    constructor() { }
}