// let innomatics={
//      "course1":{
//        "cousename": "DS",
//         "coursefee": 50000
//      },
//      "course2":{
//          "cousename": "DA",
//         "coursefee": 45000

//      },
//      "course3":{
//          "cousename": "FSD",
//         "coursefee": 60000

//      }
// }
// console.log(innomatics.course1,innomatics.course2,innomatics.course3);

// //update
// innomatics.course1.coursefee = 85000
// console.log(innomatics.course1);


// let person = new Object()
// // accessing the object
// console.log("Accessing the object");

// console.log("Before");
// console.log(person);

// //adding the data
// person.name = "hasini"
// person["age"] = 21
// person.address = "NZB"
// person.branch = "CSE"
// console.log(person);

// //update the data
// console.log("After updating");
// person.address = "6-15-270/1,pavan nagar,NZB",
// console.log(person);

// // deleting the data
// console.log("After deleting the age");
// delete person.age
// console.log(person);



// dynamics syntax property
// let key = "name"
// let  person={
//    age: 21
//    [key]:"hero"
// }
// console.log(person);


// shorter property syntax

// normal way
// let fname = "hasini"
// let age = 21
// let person = {
//    fname : fname,
//    age : age,

// };
// console.log(person);

// shorter syntax
// let fname = "hasini"
// let age = 21
// let address = "NZB"
// let person = {
//    fname,
//    age,
//    address: address,

// };
// console.log(person);



// object inside the function 

// function dressdetails(){
//    let dress={
//    cloth_type:"cotton",
//    price:2000,
//    size:"L"
// }
// console.log("Type of cloth",dress.cloth_type);
// console.log("Price of dress",dress.price);
// console.log("Size of dress",dress.size);
// }
// dressdetails()

// function dressdetails(){
//    let dress={
//    cloth_type:"cotton",
//    price:2000,
//    size:"L"
// }
// return dress
// }
// let mydress = dressdetails()
// console.log(mydress.cloth_type);


// function mobileDetails(){
//    return{
//       model:"vivo t1",
//       price:20000,
//       color:"blue"
//    }
// }
// let mobile= mobileDetails()
// console.log();


// function inside the object
// let person={
//    name:"hero",
//    brave:function(){
//       console.log("i am brave");
      
//    }
// }
// person.brave()

// let person={
//    name:"hero",
//    brave:function behaviour(){
//       console.log("i am brave");
      
//    }
// }

// person.brave()



// let person={
//    name:"hero",
//    brave:function(){
//       console.log("i am brave");
      
//    }
// };
// person["brave"]()



// let person = {
//    name: "hasini",
//    age: 21,

//    displaydetails: function(){
//          console.log("My name",this.name);
//          console.log("My age",person.age);
//    },
//    displadata:() =>{
//          console.log("My name",this.name);
//          console.log("My age",person.age);
//    }
// }
// // person.displaydetails()
// person.displadata()


function data(){
   console.log(this);
   
}
data()