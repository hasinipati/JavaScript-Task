// Print all numbers from 10 to 150 that are divisible by both 3 and 5.

// for(let i = 10;i<=150;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i,"is divisible by 3 and 5");
        
//     }
// }

//Count how many numbers from 200 down to 50 are divisible by 7.
// count = 0
// n = 7
// for(let i=200;i>=50;i--){
//     if(i%n==0){
//         count = count+1
        
//     }
// }
// console.log(count,"are numbers from the 200 to 50 are divisible by 7");


//
//Print numbers from 120 down to 20 that are not divisible by 5.
// count = 0
// for(let i = 120;i>=20;i--){
//     if(i%5!=0){
//         console.log(i);
//         count = count +1
        
//     }
// }
// console.log(count," numbers not divisible by 5");


//Find the average of all even numbers in the range from 10 to 100.
// sum = 0
// count = 0
// for(let i = 10;i<=100;i++){
//     if(i%2==0){
//         sum = sum + i
//         count = count + 1

//     }
// }
// console.log("Average of all even numbers from 10 to 100:",sum/count);


//Find the average of all factors of a given number.
// n = 5
// sum = 0
// count = 0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//        sum = sum+i
//        count = count+1
//     // console.log(i);
    
//     }
// }

//  console.log("average of all factors of given number",n,":",sum/count);


//  .Find the average of numbers from 1 to N.
//     Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.
// n = 5
// sum = 0
// count = 0
// for(let i =1;i<=n;i++){
//     sum = sum+i
//     count = count+1
// }
// console.log(sum/count);

// Find the sum of squares of numbers from 1 to N.
//     Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5
// sum = 0
// n = 5
// for(let i=1;i<=n;i++){
//     sum = sum+i**2
// }
// console.log(sum);



// Find the sum of cubes of numbers from 1 to N.
//     Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.
// sum = 0
// n = 5
// for(let i=1;i<=n;i++){
//     sum = sum+i**3
// }
// console.log(sum);


// Calculate the power of a number without using the ** operator.
//     Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.
// base  = 2
// power = 5
// res = 1
// for(let i=1;i<=power;i++){
//     res = res * base 
// }
// console.log(res);


// Display the first N terms of the Fibonacci series.
//     Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.
// n = 7
// let num1 = 0
// let num2 = 1
// for(let i = 1; i<=n;i++){
//     console.log(num1);
//     num3 = num1+num2
//     num1 = num2
//     num2 = num3
// }

// .Display the first N terms of the series:
//     1, 1/2, 1/3, 1/4, ...
//     Example: If N = 4, display 1, 1/2, 1/3, 1/4.
// n = 4
// for(let i =1;i<=4;i++){
//     if(i==1){
//         console.log(i);
        
//     }
//     else{
//         console.log("1/",i);
        
//     }
    
// }

// Display the first N terms of the series:
//     1, 11, 111, 1111, 11111, ...
//     Example: If N = 5, display 1, 11, 111, 1111, 11111.
// n = 5
// sum = 0
// for(let i=1;i<=n;i++){
//     sum = sum * 10 +1
//     console.log(sum);
    
// }

// Display the first N terms of the series:
//     1, 3, 9, 27, 81, ...
//     Each term is obtained by multiplying the previous term by 3.
n = 5
mul = 1
x = 3
for(let i = 1;i<=n;i++){
        console.log(mul);
         mul = mul*x
        
}
console.log(mul);

        