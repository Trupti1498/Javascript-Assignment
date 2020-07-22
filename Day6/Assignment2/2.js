console.log("Assignment2");

var num=prompt("Enter a Number:");

document.write("TABLE OF "+num+'<br>');
document.writeln('<br>');
for(let i = 1;i<=10;i++)
{
    document.writeln(num +" x " +i+" ="+i*num);
    document.writeln('<br>');
}