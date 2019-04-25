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

export class AddressModel {
    personalDetail: PersonalDetail;
    currentAddress: CurrentAddress;
    permanentAddress: PermanetAddress;

    constructor(currentAddress: CurrentAddress, permanentAddress: PermanetAddress) {
        this.currentAddress = currentAddress;
        this.permanentAddress = permanentAddress;
    }
    set personalDetailData(obj) {
        this.personalDetail = obj;
    }
    set currentAddressData(obj) {
        this.currentAddress = obj;
    }
    set permanentAddressData(obj) {
        this.permanentAddress = obj
    }
}