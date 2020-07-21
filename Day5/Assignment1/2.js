


let arr1 = [];
let arr=[];

let flag=0;
  while(flag!=1)
  {
  
  let num =prompt("Enter number to be entered in the array :");
  arr1.push(num);
  arr=arr1;
  arr=arr1.filter(function (arr){
      if(isNaN(arr)){
      flag=1;
      arr1.pop();
      }
  });
  }
  console.log("The array of number is : "+arr1);
  

  let odds = arr1.filter(n => n%2)

  console.log("Odd numbers in array are:"+odds);

  let cube=odds.map(n=>n**3);

  console.log("Cube of odd number in array are:"+cube);

