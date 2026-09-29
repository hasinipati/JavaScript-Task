// for(j=1;j<=5;j++){
//       for(i=1;i<=5;i++){
//         if(j+i == 5){
//             console.log(j,i)
//         }
//       }
// }
//  console.log(" ");
 
// for(let i=1;i<=10;i++){
//     let n =i
//     if(n%2==0){
//         console.log(n);
        
//     }
// }
// console.log(" ");
// for(let i=1;i<=10;i++){
// let n = i
// if(n%2!=0){
//     console.log(n);
    
// }
// }
// for(let j=1;j<=5;j++){
//     let n = j
// for(let i =1;i<=10;i++){

// console.log( n+"X",i,"=",n * i);
// }
// }


// console.log("factorial of numbers from 1 to 5");

// for(let j=1;j<=5;j++){
// let n =j
// fact = 1
// for(let i=1;i<=n;i++){
//     fact = fact*i   
// }
//  console.log(fact);
// }

// for(let j=1;j<=10;j++){
// let n = j
// count = 0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
       
//         count = count +1
        
//     }
//     if(count==2){
//           console.log( i,"is prime number");
//     }
// }
// }

for(let j=1;j<=100;j++){
n = j
temp = n
res = 0
while(n>0){
     x = n%10
     n = parseInt(n/10)
     res = res *10 + x
}
if(temp == res){
    console.log(res);
    
}
}
