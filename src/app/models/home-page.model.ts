import { Labels } from '../common/constants';
export class HomePageModel {
    personalDetails;
    currentAddress;
    permanentAddress;
    constructor(personalDetails, permamentAdd, tempAddress) {
        this.personalDetails = [
            {
            label: Labels.personalDetails.name,
            value: personalDetails.name
            },
            {
                label: Labels.personalDetails.fatherName,
                value: personalDetails.fatherName
            },
            {
                label: Labels.personalDetails.motherName,
                value: personalDetails.motherName
            },
            {
                label: Labels.personalDetails.email,
                value: personalDetails.email
            },
            {
                label: Labels.personalDetails.gender,
                value: personalDetails.gender
            }

        ];
        this.currentAddress = [
            {
                label: Labels.addressDetails.city,
                value: tempAddress.city
            },
            {
                label: Labels.addressDetails.state,
                value: tempAddress.state
            },
            {
                label: Labels.addressDetails.country,
                value: tempAddress.country
            },
        ];
        this.permanentAddress = [
            {
                label: Labels.addressDetails.city,
                value: permamentAdd.city
            },
            {
                label: Labels.addressDetails.state,
                value: permamentAdd.state
            },
           {
                label: Labels.addressDetails.country,
                value: permamentAdd.country
            },
        ];

    }
}
