// level {2} Replace all the vowels in a string with uppercase vowels ?

var new_array = ["E", "l", "i", "e"];
var vowels = /[Elie]/gi;
var string = new_array.join("");

string.replace(/([Elie])/g, function (matching) {
  var str = matching.toUpperCase();
  console.log(str);
});
console.log(string);
