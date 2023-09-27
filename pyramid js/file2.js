// let number = 5;
// let star = "";
// for(i=0;i<number; i++){
//     for(j=0; j<number; j++){
//         if(i===0 || i===number -1 || j===0|| j===number-1)
//         star += "*"
//         else(
//             star += " "
//         )
//     }
//     star+="\n"
// }
// console.log(star)

// let number = 100;
// let epmty = "";
// for (i=1; i<=10; i++){
//     // epmty.slice()
//     console.log(i)
//      if ((i + 1) % 3 === 1){
//         console.log('helo')
//     }
// }


let number = 10;
let star = "";
for (i=0;i<=number;i++){
    for(j=0;j<i;i++){
        star += "*";
    }
    star+= "\n";
}
console.log(star)



 