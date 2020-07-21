console.log("Assignment3");

//https://jsonplaceholder.typicode.com/todos

// console.log("Fetch using direct fetch() :")

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json()).then(data=>console.log(data));

// console.log("Fetch using async and await :")

async function fetch1(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data =await response.json();
    console.log(data);
}

fetch1();

// console.log("Fetch using promise:")

const data1 = new Promise((resolve,reject)=>{
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        const error=false;
        
        if(!error)
        {
          fetch1();
        }
        else {
                reject("An Error Occurred");
            }
       },3000);
   })

    
})