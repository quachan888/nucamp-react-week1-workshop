class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = new Array();
    }
    registerStudent(studentToRegister) {
        let isRegistered = this.students.filter((e) => e.email === studentToRegister.email).length;
        if (isRegistered) {
            console.warn(`This student email ${studentToRegister.email} is already registered to ${this.name}!`);
        } else {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }

    dropStudent(studentToDrop) {
        let isRegistered = this.students.some((e) => e.email === studentToDrop.email);
        if (isRegistered) {
            this.students.splice(this.students.indexOf(studentToDrop), 1);
            console.log(`Student ${studentToDrop.email} is removed from Bootcamp ${this.name}`);
        } else {
            console.warn(`Student ${studentToDrop.email} is not in ${this.name}!`);
        }
        return this.students;
    }
    countStudent() {
        let result = this.students.length;
        console.log(`There are ${result} students in ${this.name}.`);
    }
}

console.log("===== TASK 1 =====");
let s1 = new Student("Andy", "111@gmail.com", "Sandy Spring");
let s2 = new Student("Sandy", "222@gmail.com", "San Jose");
let s3 = new Student("Neo", "333@live.com", "Tacoma");
console.log(s1);
console.log(s2);
console.log(s3);

const webDevFundamentals = new Bootcamp("Web Developement Fundamentals", "Beginner");
const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");
console.log(webDevFundamentals);
console.log(fullStack);

console.log("");
console.log("===== TASK 2: REGISTER STUDENT =====");
webDevFundamentals.registerStudent(s1);
webDevFundamentals.registerStudent(s2);
fullStack.registerStudent(s1);
fullStack.registerStudent(s3);
webDevFundamentals.registerStudent(s2);
fullStack.registerStudent(s1);

console.log(webDevFundamentals);
console.log(fullStack);

console.log("");
console.log("===== BONUS TASK 1: DROP STUDENT =====");
webDevFundamentals.dropStudent(s2);
webDevFundamentals.dropStudent(s3);
console.log(webDevFundamentals);
console.log(fullStack);

console.log("");
console.log("===== BONUS TASK 2: COUNT STUDENT =====");
webDevFundamentals.countStudent();
fullStack.countStudent();
