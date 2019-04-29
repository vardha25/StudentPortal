export class PhotoSignatureModel {
    constructor(
        public photoName: string,
        public photo: File,
        public signName: string,
        public sign: File
        ) {}
}
