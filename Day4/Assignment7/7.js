    console.log("Assignment 7:")
    
    var i;
    var flag=true;
let n=prompt("Enter the Number n :");

let bool=isPrime(n);


function isPrime(n)
{
    for( i = 2; i <= n-1; i++) 
        if ( n % i == 0 )
            {
                flag = false;
                break;
            }

}

if(flag==true)
{
console.log(`${n} is prime number`)
}
else
{
console.log(`${n} is not a prime number`)
}