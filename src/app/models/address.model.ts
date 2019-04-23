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
export class AddressModel {
    currentAddress: CurrentAddress;
    permanentAddress: PermanetAddress;
    constructor(currentAddress: CurrentAddress, permanentAddress: PermanetAddress) {
        this.currentAddress = currentAddress;
        this.permanentAddress = permanentAddress;
    }
}