
var ClozeCard = require("./ClozeCard.js");

var sometext = "The man George Washington was our first President";
var ripText = "George Washington";

var newCard = new ClozeCard(sometext, ripText);

console.log(newCard.valid);
console.log(newCard.fullText);
console.log(newCard.partial);
console.log(newCard.cloze);

