// this = window
// these are global object
// global = not inside a function
// variable and function get attach to global object window/this
// can be call in google chrome console a and b()
var a = 'Hello world!';


function b() {
    console.log(a);
}