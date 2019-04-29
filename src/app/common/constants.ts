export const AddressAPI = {
    Countries: 'https://raw.githubusercontent.com/tamit9509/Countries-States-Cities-database/master/countries.json',
    States: 'https://raw.githubusercontent.com/tamit9509/Countries-States-Cities-database/master/states.json',
    Cities: 'https://raw.githubusercontent.com/tamit9509/Countries-States-Cities-database/master/cities.json'
};

export const UserToken = '';
export const Errors = {
    InvalidEmail: 'Please enter correct email',
    RequiredField: 'This field is required',
    PinCode: 'Must be of 6 digits!',
    LargeFile: 'File size is too large',
    SmallFile: 'File size is too small'

};
export const PageTitles = {
    personalDetail: {
        Title: 'Personal Details'
    },
    photoSignature: {
        Title: 'Photo Signature Details',
        Subtitle1: 'Upload Photograph',
        Subtitle2: 'Upload Signatures'
    },
    registrationForm: {
        Title: 'Registration Form',
        permanentAddressTitle: 'Permanent Address',
        currentAddressTitle: 'Current Address',
        photoSignatureTitle: 'Photo and Signatures'
    }
};
export const APIS = {
    RegisterUser: 'http://192.168.2.219:8000/user',
    LoginUser: 'http://192.168.2.219:8000//user/login'
}
export const Labels = {
    personalDetails: {
        name: 'Name',
        fatherName: 'Father\'s Name',
        motherName: 'Mother\'s Name',
        email: 'Email',
        gender: 'Gender',
    },
    addressDetails: {
        city: 'City',
        country: 'Country',
        state: 'State',
        pin: 'PIN Code'
    },
    photoSignature: {
        image: 'Image',
        sign: 'Signature'
    }

}

