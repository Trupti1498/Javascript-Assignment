console.log("Assignment 2");

const student= {
     name:"Helsinki",
    age:24,
    projects:{
        dice:"Two player dice game using Javascript"
    }
}

const{ name,age,projects:{dice}}=student;
console.log(`The name of student is ${name} and his age is  ${age} and his project is :- ${dice}`);
