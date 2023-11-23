function x() {
    var i=1;
    for(var i=1;i<6;i++) {
       function close(i) {
    setTimeout(function(){
        console.log(i);
    },(i*1000));
} close(i);
}
    console.log("hii bulbul");
}
x();

//closure, it is taking reference of i

// function x() {
//     var i=1;
//     for(let i=1;i<6;i++) {
//     setTimeout(function(){
//         console.log(i);
//     },(i*1000));
// }
//     console.log("hii bulbul");
// }
// x();
//let is block scoped, everytime this function call with a new copy of i as let is block scoped which is not in the case of var.



//crazy js interview questions

