                            // for loop


// let string ="";
// for (let i=0; i<10; i++){
//     for(j=0; j<20; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string)

                         // while loop

    // let i = 0 ;
    
    // while(i<5){
    //     i++
    //     console.log(i)
    // }
    //  const person = {
    //     name: "safyan",
    //     age: 23,
    //     hobies:['work','work','work']
    // }
    // console.log(person);

                    //  functions
    //  function name(){
    //     console.log('happy birtday to you')
    //  }
    //  name()
    //  name()
    //  name()
    //  name()
    //  name()
    //  name()
    //  name()


                    //  basic function
    // function sumtwobumber(number1, number2,number3){
    //    return number1+number2+number3
    // }
    // let returnedvalue = sumtwobumber(4,5,6)
    // console.log(returnedvalue)


    // console.log(2%5 === 0)

                    // key method

    // let person = {
    //     name: "Sufyan",
    //     age :22,
    //     hobies : ["code", "cricket","songs",]
    // }
    // console.log(person,"key") 
    // person["key"] = "safyanali37040@gmail.com";
    // console.log(person)
    // for(
    //     let key in person
    // ){
    //     console.log(person)
    // }
    // for (
    //       let key in person
    // ){
    //     console.log(person,[key])
    // }



// let data = {
//     name : "Sufyan",
//     age : 23,
//     hobies : ["coding","cricket","songs"],
//     email : "safyanali37040@gmail.com",
//  }

//  for (let j in data){
//     console.log(data,j)
//  }




                                    //object inside Array


//  let users = [
//     {userId : 1, userName:"sufyan", userGender : "Male"},
//     {userId : 2, userName:"ali", userGender : "Male"},
//     {userId : 3, userName:"momo", userGender : "F-Male"},
//  ]
// for(let user of users){
//     console.log(user.userGender)
// }

                                        // functions


// function findTarget (array,target){
//     for (let i = 0; i<array.length; i++)
//     if(array[i]===target)
// }


// function isEven (number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(4))

//  let findTarget=(
//     array,target)=>{
//         for(
//              let i = 0; i<array.length; i++){
//              if(array[i]===target) {
//                 return i;
//              }
//     }
//     return -1;
//         }


//     let arry = [1,23,3,4,45];
//     let ans=findTarget(arry,4);
//     console.log(ans);


// let singSong = ()=>{
//     console.log("happy birthday to you");
// }
// singSong()




                    // lexical scope
// let myVar = "value1";
// let myApp = function(){
//     function myFunc (){}
//     myFunc2 = ()=>{}

// }



                        //  Deafult parameter
// function addTwo(a, b=0){
//     return a+b;
// }   
// let ans = addTwo(4,4);
// console.log(ans);



                        // Rest parameter
// function myNum (...numbers){
//     let total = 0;
//     for(let number of numbers ){
//         total = total + number;
//     }
//     return total;
// }

// let ans =  myNum(100,100)
// console.log(ans);



                    // map method

// let func = function(number){
//     return number*number;
// // }
// let square = numbers.map((number)=>{
//     return number*number;
// });
// console.log(square);


                            //   practise


// let arr = [5,6,4,2,4,5];
// let arr2 = [];
// for(i=0; i<arr.length; i++){
//     // console.log(numbers[i]);
//     let ans = arr[i];
//     arr2.push(  ans * 2 );
//     console.log(arr2[i])

// }



// let numbers = [3,4,5,6,8];

// let arr = function(number){
//     return number * 5;
// }
// let ans = numbers.map(arr)
// console.log(ans);





                                            //    filter function

// with loop

// let arr = [5, 6, 4, 2, 4, 5];
// let result = [];
// function filter(data, fn) {
//   for (let i = 0; i < data.length; i++) {
//     let item = data[i];
//     if (fn(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(filter(arr, function(item){
//     return item/3%1;
// }));


// with filter function

// let arr = [5, 6, 4, 2, 4, 5];
// console.log(arr.filter(function(item){
//     return item%4==2;
    
// }));



                                 //reduce method

    // with loof

// let arr = [1,2,3,4,5,];
// let accumaltor= 0;
// for(i=0;i<arr.length;i++){
//   result += arr[i]
// }
// console.log(result)



// with reduce method

// let arr = [1,2,3,4,5,];
// let result = arr.reduce(function(accumaltor, current){
//   return accumaltor+current;
// }, 0);;

// console.log(result);



                                     // Sort method



