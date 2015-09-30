
var assignment = function () {

  var aEl = document.getElementById("small-num");
  var zEl = document.getElementById("big-num");
  var aVal = aEl.value
  var zVal = zEl.value
  alert("you picked " + aVal + " and " + zVal +" !");
  for ( aVal ; aVal <= zVal; aVal ++) {
    if (aVal % 5 === 0 && aVal % 3 === 0) {
      var newEl = document.createElement("p");
      var newtext = document.createTextNode("FizzBuzz");
      newEl.appendChild(newtext);
      document.getElementById("output").appendChild(newEl);
    } else if ( aVal % 5 === 0) {
      var newEl = document.createElement("p");
      var newtext = document.createTextNode("Buzz");
      newEl.appendChild(newtext);
      document.getElementById("output").appendChild(newEl);
    } else if (aVal % 3 === 0) {
      var newEl = document.createElement("p");
      var newtext = document.createTextNode("Fizz");
      newEl.appendChild(newtext);
      document.getElementById("output").appendChild(newEl);
    } else {
      var newEl = document.createElement("p");
      var newtext = document.createTextNode(aVal);
      newEl.appendChild(newtext);
      document.getElementById("output").appendChild(newEl);
    }
  }
};




