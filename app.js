function b() {
    var v;
    console.log(v);
    
}

function a() {
    var v = "in a";
    b();
    console.log(v);
    
}

a();
var v = "global";
console.log('v');
