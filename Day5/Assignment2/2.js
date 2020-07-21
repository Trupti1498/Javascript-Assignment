console.log("Assignment 2");

class User{
   static Coins=0;
    constructor(name,age,email) {
        this.name=name;
        this.age = age;
        this.email = email;
        this.Coins=0;
        this.course=[];
    }
    login() {
        console.log(`${this.name} has logged out`);
        return this;
    }
    logout()
    {
        console.log(`${this.name} has logged out`);
        
        return this;
    }
    addCoins(){
        this.Coins++;
        console.log(`${this.name} has ${this.Coins} coins`);
         return this;
    }
}

class Moderator extends User {
    constructor(name,age, email,role) {
        super (name, age,email);
        this.role = role;
   }
    addModCoins(user){
        user.Coins+=10;
        console.log(`Moderator added ${user.Coins} Coins  to the user ${user.name}  `);
         return this;

    }

    removeCoins(user){
       user.Coins--;
       console.log(`Moderator Removed ${user.Coins} coins  to the user ${user.name}  `);

       return this;
    }



}


class Admin extends Moderator{
     
    addCourse(user,course){
        user.course.push(course);
        console.log(user);
    }

    deleteCourse(user,course){
        user.course.pop(course);
        console.log(user);
    }

}

let user1= new User("John",22,"john@gmail.com");
let user2= new User('Jonas',20,'jonas@gmail.com');
let user3= new User('Martha',18,'martha@gmail.com');
let mod = new Moderator('Adam',27,'adam@gmail.com','Moderator');
let admin = new Admin('Eva',25,'eva@gmail.com','Admin');
user1.login().addCoins().addCoins().logout();
user2.login().addCoins().addCoins().logout();
mod.addModCoins(user1);
mod.removeCoins(user1);

admin.addCourse(user1,'Python');
admin.addCourse(user1,'Javascript');

admin.addCourse(user2,'Javascript');

admin.deleteCourse(user1,'Javascript');

