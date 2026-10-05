// // Print numbers from 1 lakh to 2 lakh.
// for(let i = 100000;i<=200000;i=i+1){
//     console.log(i);
    
// }


// // Print the sequence: 1 4 9 16 25 36 49 ... 100
//  for(let i = 1;i<=10;i = i+1){
//     console.log(i*i);
    
// }
// // Print the sequence: 1 8 27 64 125 216 ... 1000
// for(let i = 1;i<=10;i = i+1){
//     console.log(i*i*i);
    
// }
// // Print numbers from 5 lakh to 4 lakh in reverse order.
// for(let i = 500000;i>=400000;i =i-1){
//     console.log(i);
    
// }
// // Print the sequence: 2.5 2 1.5 1 0.5
// for (let i = 2.5;i>=0.5;i=i-0.5){
//     console.log(i);
    
// }


// let sum = 0
// for(let i = 1;i<=3;i++){
//     sum = sum+10
// }
// console.log("sum=",sum);


// let sum = 0
// for(let i = 1;i<=3;i++){
//     sum = sum+i
// }
// console.log("sum=",sum);
// let n = 3
// for(let i = 1;i<=10;i++){
//     console.log(n+" X " + i+" = "+ n*i);
    
// }

// let n = 5
// let fact = 1
// for(let i = n;i>=1;i--){
//     fact = fact *i
//     }
// console.log(fact);



// let num1 = 0
// let num2 = 1
// for(let i = 0; i<=10;i++){
//     console.log(num1);
//     num3 = num1+num2
//     num1 = num2
//     num2 = num3
// }
  

//for with conditions

// for(let i = 1;i<=5;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }

// for(let i = 10;i>=5;i--){
//     if(i%2!=0){
//         console.log(i);
        
//     }
// }


// for(let i = 10;i<=15;i++){
//     if(i%5==0){
//         console.log(i);
        
//     }
// }


// sum = 0
// for(let i = 1;i<=5;i++){
//     if(i%2==0){
//         sum = sum + i
//     }
// }
// console.log("sum of even numbers ",sum);


// sum = 0 
// for(let i = 10;i<=20;i++){
//     if(i%4==0){
//         sum = sum + i
//     }
// }
// console.log(sum);

// count = 0
// for(let i = 1;i<=5;i++){
//     if(i%2!=0){
//         count = count+1
//     }
// }
// console.log(count);


// for(let i = 1;i<=6;i++){
//     if(6%i==0){
//         console.log(i);
        
//     }
// }
// count = 0
// n = 6
// for(let i = 1;i<=n;i++){
//     if(n%i==0){
//         count = count + 1
        
//     }
// }
// console.log("count factors of 6:",count);


//check prime number
// count = 0
// n = 6
// for(let i = 1;i<=n;i++){
//     if(n%i==0){
//         count = count + 1
        
//     }
// }
// console.log("count factors of :",count);
// if(count==2){
//     console.log(n,"Is is a Prime number");
    
// }
// else{
//     console.log(n,"is not prime number");
    
// }

//sum of factors
// n = 6
// sum = 0
// for(let i = 1;i<=n;i++){
//     if(n%i==0){
//         sum = sum +i 
//     }
// }
// console.log("sum of factors of",n,":",sum);


//check number is perfect number or not
n = 6
sum = 0
for(let i = 1;i<n;i++){
    if(n%i==0){
        sum = sum +i 
    }
}
console.log("sum of factors of",n,":",sum);
if(sum==n){
    console.log(n,"is perfect number");
    
}
else{
    console.log(n,"is not perfect number");
    
}

