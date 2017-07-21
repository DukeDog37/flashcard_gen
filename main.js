
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var clozeCardText = "George Washington was the first president of the United States.";
var clozeText = "George Washington";
var basicCardFront = "Who was the first president of the United States?";
var basicCardBack = "George Washington";

//Basic Card
var newBasic = new BasicCard(basicCardFront, basicCardBack);
console.log("++++++++++++++++++++");
console.log("Basic Card Example:");
console.log("Card Front: " + newBasic.front + "\n");
console.log("Card Back: " + newBasic.back + "\n");
console.log("++++++++++++++++++++");
//Cloze Card
var newCloze = new ClozeCard(clozeCardText, clozeText);
console.log("++++++++++++++++++++");
console.log("Cloze Card Example:");
console.log("Card Cloze: " + newCloze.cloze + "\n");
console.log("Card Partial: " + newCloze.partial + "\n");
console.log("Card Full Text: " + newCloze.fullText);
console.log("++++++++++++++++++++\n");

//Broken Cloze Card
console.log("++++++++++++++++++++");
console.log("Broken Cloze Card Example:");
var brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log("++++++++++++++++++++");
