// I began with the basic function and logic down below and then tried
// to break it up with the help of Mark using instantiation and prototypes
// but it became too complicated and I lost track.

var aVal, zVal

var FizzBuzz = (function () {

  var brains = function(aVal, zVal){
  var myArray =[];
  for ( aVal ; aVal <= zVal; aVal ++) {
    if (aVal % 5 === 0 && aVal % 3 === 0) {
      myArray.push("FizzBuzz");
      // var newEl = document.createElement("li");
      // var newtext = document.createTextNode("FizzBuzz");
      // newEl.appendChild(newtext);
      // document.getElementById("output").appendChild(newEl);
    } else if ( aVal % 5 === 0) {
      myArray.push("Buzz");
      // var newEl = document.createElement("li");
      // var newtext = document.createTextNode("Buzz");
      // newEl.appendChild(newtext);
      // document.getElementById("output").appendChild(newEl);
    } else if (aVal % 3 === 0) {
      myArray.push("Fizz");
      // var newEl = document.createElement("li");
      // var newtext = document.createTextNode("Fizz");
      // newEl.appendChild(newtext);
      // document.getElementById("output").appendChild(newEl);
    } else {
      myArray.push(aVal);
      // var newEl = document.createElement("li");
      // var newtext = document.createTextNode(aVal);
      // newEl.appendChild(newtext);
      // document.getElementById("output").appendChild(newEl);
    }
  }
    return myArray;
  };

    var _fizzbuzz = function() {};

    _fizzbuzz.prototype = {
      read: function (aVal, zVal) {
        this.result = brains(aVal, zVal);
      }
    }
  return _fizzbuzz;
}());

var myfizz = new FizzBuzz();


document.getElementById("buttonA").addEventListener("click", function (e) {
  e.preventDefault();
  aVal  = document.getElementById("small-num").value;
  zVal  = document.getElementById("big-num").value;
  myfizz.read(aVal, zVal);
});


// Basic Function
// var aVal, zVal

// document.getElementById("btn").addEventListener("click", function (e) {
//   e.preventDefault();
//   aVal = document.getElementById("small-num").value;
//   zVal = document.getElementById("big-num").value;
//   alert("you picked " + aVal + " and " + zVal +" !");
//   for ( aVal ; aVal <= zVal; aVal ++) {
//    if (aVal % 5 === 0 && aVal % 3 === 0) {
//       var newEl = document.createElement("p");
//       var newtext = document.createTextNode("FizzBuzz");
//       newEl.appendChild(newtext);
//       document.getElementById("output").appendChild(newEl);
//     } else if ( aVal % 5 === 0) {
//       var newEl = document.createElement("p");
//       var newtext = document.createTextNode("Buzz");
//       newEl.appendChild(newtext);
//       document.getElementById("output").appendChild(newEl);
//     } else if (aVal % 3 === 0) {
//       var newEl = document.createElement("p");
//       var newtext = document.createTextNode("Fizz");
//       newEl.appendChild(newtext);
//       document.getElementById("output").appendChild(newEl);
//     } else {
//       var newEl = document.createElement("p");
//       var newtext = document.createTextNode(aVal);
//       newEl.appendChild(newtext);
//       document.getElementById("output").appendChild(newEl);
//     }
//   }
// });

