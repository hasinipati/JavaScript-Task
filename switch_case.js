// let n = 4
// switch (n){
//     case 1:
//         console.log("case 1");
//         break;
//     case 2:
//         console.log("case 2");
//         break;
//     case 3:
//         console.log("case 3");
//         break;
//     case 4:
//         console.log("case 4");
//         break;
//     default:
//         console.log("default block");
// }


// let color = "black"
// switch (color){
//     case "red":
//         console.log("stop the vechile");
//         break;
//     case "yellow":
//         console.log("get ready to go");
//         break;
//     case "green":
//         console.log("you can go");
//         break;
//     default:
//         console.log("error");
        
// }


//fallthrough example
// let n = 2
// switch (n){
//     case 1:
//         console.log("case 1");
        
//     case 2:
//         console.log("case 2");
        
//     case 3:
//         console.log("case 3");
    
//     case 4:
//         console.log("case 4");
        
//     default:
//         console.log("default block");
// }

// let day = 0
// switch (day){
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tuesday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("thursday");
//         break;
//     case 6:
//         console.log("friday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log("error");
//}


let n1 = 20
let n2 = 10
op = "*"
switch(op){
    case "+":
        console.log( "Addition of", n1,"and",n2,"=",n1 + n2);
        break;
     case "-":
        console.log( "substraction of", n1,"and",n2,"=",n1  - n2);
        break;
     case "*":
        console.log( "Multiplication of", n1,"and",n2,"=",n1 * n2);
        break;
     case "/":
         console.log( "Division of", n1,"and",n2,"=",n1 / n2);
        break;
     case "%":
         console.log( "Modulus of", n1,"and",n2,"=",n1 % n2);
        break;
    default:
        console.log("invalid operator");
}