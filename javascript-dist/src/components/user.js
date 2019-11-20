export default class User {
    constructor(
        firstName,
        lastName,
        age,
        gender
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        console.log(`Init user - ${this.firstName}`);
    }

    getUser(){
        return `<li>${this.firstName} ${this.lastName}</li>`
    }
}
