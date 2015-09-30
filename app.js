var aVal, zVal
var myArray =[];

var FizzBuzz = (function () {

  var brains = function(aVal, zVal){
    for ( aVal ; aVal <= zVal; aVal ++) {
      if (aVal % 5 === 0 && aVal % 3 === 0) {
        myArray.push("FizzBuzz");
      } else if ( aVal % 5 === 0) {
        myArray.push("Buzz");
      } else if (aVal % 3 === 0) {
        myArray.push("Fizz");
      } else {
        myArray.push(aVal);
      }
    }
    return myArray;
  };

  var _fizzbuzz = function() {};

  _fizzbuzz.prototype = {
    read: function (aVal, zVal) {
      this.result = brains(aVal, zVal);
      },
    write: function(aVal, zVal){
      this.result = brains(aVal, zVal);
      var newEl = document.createElement("p");
      var newtext = document.createTextNode(myArray);
      newEl.appendChild(newtext);
      document.getElementById("output").appendChild(newEl);
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
  myfizz.write(aVal, zVal);
});


