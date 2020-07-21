

let res=[];
let n=prompt("How many number you want to add in array ? Enter number: ")
for(var i=0;i<n;i++){
  res[i]=prompt("Enter the Number");
}



let pos = res.filter(function(res) {
    return res > 0;
  })

console.log("Numbers You Entered are :"+res);  
console.log("Enter number is positive:"+pos);


  


// let arr1 = [];
// let arr=[];

// let flag=0;
//   while(flag!=1)
//   {
  
//   let num =prompt("Enter a number");
//   arr1.push(num);
//   arr=arr1;
//   arr=arr1.filter(function (arr){
//       if(isNaN(arr)){
//       flag=1;
//       arr1.pop();
//       }
//   });
//   }
//   console.log("The array of number is : "+arr1);
  

//   let odds = arr1.filter(n => n%2)

//   console.log("Odd numbers in array are:"+odds);

//   let cube=odds.map(n=>n**3);

//   console.log("Cube of odd number in array are:"+cube);



