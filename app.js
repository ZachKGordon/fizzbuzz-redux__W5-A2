
var assignment = (function () {
  // var a = document.getElementById("small-num");
  // var z = document.getElementById("big-num");
  var a = 1;
  var z = 5;
  alert("you picked " + a + " and " + z +" !");
  for ( a ; a <= z; a ++) {
   if (a % 5 === 0 && a % 3 === 0) {
    var newEl = document.createElement("p");
    var newtext = document.createTextNode("FizzBuzz");
    newEl.appendChild(newtext);
    document.getElementById("output").appendChild(newEl);
  } else if ( a % 5 === 0) {
    var newEl = document.createElement("p");
    var newtext = document.createTextNode("Buzz");
    newEl.appendChild(newtext);
    document.getElementById("output").appendChild(newEl);
  } else if (a % 3 === 0) {
    var newEl = document.createElement("p");
    var newtext = document.createTextNode("Fizz");
    newEl.appendChild(newtext);
    document.getElementById("output").appendChild(newEl);
  } else {
    var newEl = document.createElement("p");
    var newtext = document.createTextNode(a);
    newEl.appendChild(newtext);
    document.getElementById("output").appendChild(newEl);
  }
}
}());


