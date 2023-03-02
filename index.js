function joo(){
    console.log("joo hello");
}
joo();

function add(a,b){
 console.log("Sum of "+a+" and "+b+" is "+(a+b));
}
add(3,4);

jyo = () => {
console.log ("Hello Joo!");
}
jyo();

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

function factorial(n){
    let product=1
    for(i=1;i<=n;i++){
      product=product*i;
    }
    console.log(product);
  }
  factorial(10);

 