console.log("Assignment 3");

var marks = prompt("Enter your Marks :");

if(marks >=80 && marks<=100)
{
    console.log("Marks are "+marks+" your garde is A");
}
else if(marks>=50 && marks<80)
{
    console.log("Marks are "+marks+" your garde is B");
}
else if(marks >= 35 && marks<50)
{
    console.log("Marks are "+marks+" your garde is C");
}
else
{
    console.log("Marks are "+marks+" you are fail");
}