class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipCode = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    
    get firstName() {
        return this._firstName; 
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName; 
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get address() {
        return this._address; 
    }

    set address(address) {
        this._address = address;
    }

    get city() {
        return this._city; 
    }

    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state; 
    }

    set state(state) {
        this._state = state;
    }

    get zipCode() {
        return this._zipCode; 
    }

    set zipCode(zipCode) {
        this._zipCode = zipCode;
    }

    get phoneNumber() {
        return this._phoneNumber; 
    }

    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }

    get email() {
        return this._email; 
    }

    set email(email) {
        this._email = email;
    }

    toString(){
        return "firstName = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address + ", city = " + this.city  + 
        ", state = " + this.state + ", zipCode = " + this.zipCode + ", phoneNumber = " + this.phoneNumber + ", email = " + this.email;
    }
}

let contact = new Contact("Ajit", "Vibhute", "Navunda", "Lohara", "Maharashtra", 9850962723, "vibhuteajit3@gmail.com", 567567);
console.log(contact.toString());