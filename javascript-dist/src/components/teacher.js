export default class Teacher {
    constructor(
        firstName,
        lastName,
        age,
        gender,
        yearsOfTenure
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.yearsOfTenure = yearsOfTenure;
        console.log(`Init teacher - ${this.firstName}`);
    }
    getTeacher(){
        return `<li>${this.firstName} ${this.lastName}</li>`
    }
}