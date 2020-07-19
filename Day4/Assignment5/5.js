console.log("Assignment 5:");
let reward;
var s =prompt("Enter the Employees sales made by by the during the year");
s1=s;
debugger;
if(s<=5000&& s>0)
{
    s1 = (s1*2);
    reward =s1/100;

    console.log("Total commission earned by him is :"+reward );
}
else if(s>=5001 && s<=10000)
{
    let s2=(s1*2);
    s1 = (s1*5);
    reward =s1/100;
    
    var reward1=(s2/100);
    var sum=reward+reward1;

    console.log("Total commission earned by him is :"+sum );
}
else if(s>=10001 && s<=20000)
{
    let s2=(s1*2);
    let s4 = (s1*5);
    let s3= (s1*7);
    
    reward =(s2/100);
     reward +=(s4/100);
  
    reward +=(s3/100);

    console.log("Total commission earned by him is :"+reward );
}
else if(s>20000)
{
    let s2=(s1*2);
    let s3= (s1*7);
    let s5 = (s1*5);
    let s4= (s1*10);

    reward =(s5/100);
    
    reward +=(s2/100);
    
    reward +=(s3/100);
    
    reward +=(s4/100);

    console.log("Total commission earned by him is :"+reward );
}
else{
    console.log("You have entered wrong value");
}