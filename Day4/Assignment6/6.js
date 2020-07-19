console.log("Assignment 6");

var num=prompt("Enter a Number :");

loop(num);

function loop(num)
{
    
    for(let i=num;i<100;i++)
    {
        debugger;
        console.log("Number above 100");
        i =prompt("Enter a Number Above 100 :");
    }
 
}
