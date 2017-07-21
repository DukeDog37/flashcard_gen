var ClozeCard = function(text, cloze){
	this.cloze = cloze;
	this.partial = "";
	this.fullText = text;
	this.valid = false;
	//need to validate
	var n = this.fullText.indexOf(this.cloze);
	//console.log(n);
	if(n == -1){
		console.log("Your cloze text .." + this.cloze + ".. was not found in the string");
		//this.valid remains false
	}
	else{
		this.valid = true;
		this.partial = this.fullText.replace(cloze, "....");
	}
}

//export line
module.exports = ClozeCard;