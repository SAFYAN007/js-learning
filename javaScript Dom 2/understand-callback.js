function helo (one,){
    console.log("my 1 function");
    one();
}
// helo();
// function helo2(){
//     console.log("my 2 function")
// }

// helo(helo2);

helo(function(){
    console.log("my 2 function")
});



