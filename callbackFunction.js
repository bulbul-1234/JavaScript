//function are first class citizens of JS
//we can take a function and pass it to another function and that function which we pass is callback function.
//gives access to the whole asynchronous world in a synchronous single threaded language
//settimeout takes a callback funtion

// setTimeout(function() { 
//     console.log("timer");
// },5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });


//always try to use async for the things which are taking time. 

function attachEventListeners(){
    let count =0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked",++count);
    });
}
attachEventListeners();
