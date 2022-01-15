class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegistry) {
        if (this.isRegFunction(studentToRegistry)) {
            console.warn(`This student email ${studentToRegistry.email} is already registered to ${this.name}!`);
        } else {
            this.students.push(studentToRegistry);
            console.log(`Registering ${studentToRegistry.email} to the bootcamp ${this.name}.`);
        }
    }
    isRegFunction(studentToCheck) {
        let isReg = false;
        for (let each of this.students) {
            if (each.email === studentToCheck.email) isReg = true;
        }
        return isReg;
    }
}

// Create one or more student object using the Student class.
console.log("=== Create one or more student object using the Student class.");
let s1 = new Student("Andy", "111@gmail.com", "Sandy Spring");
let s2 = new Student("Sandy", "222@gmail.com", "San Jose");
let s3 = new Student("Neo", "333@live.com", "Tacoma");
console.log(s1);
console.log(s2);
console.log(s3);
console.log("");

// Create a new bootcamp using the Bootcamp class.
console.log("==== Create a new bootcamp using the Bootcamp class.");
const webDevFundamentals = new Bootcamp("Web Developement Fundamentals", "Beginner");
const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");
console.log(webDevFundamentals);
console.log(fullStack);

// Register the student object(s) to one of the bootcamp objects you created. Verify that registration succeeded.
console.log("");
console.log("=== Register the student object(s) to one of the bootcamp objects ");
webDevFundamentals.registerStudent(s1);
webDevFundamentals.registerStudent(s2);
fullStack.registerStudent(s1);
fullStack.registerStudent(s3);

// Verify that you cannot register the same student twice to a Bootcamp.
webDevFundamentals.registerStudent(s2);
fullStack.registerStudent(s1);

console.log(webDevFundamentals);
console.log(fullStack);
