var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(5);
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var easyOn = false;
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";

easyBtn.addEventListener("click",function(){
	easyOn = true;
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.background = "steelblue"
	colors = generateRandomColors(5);
	pickedColor = pickColor(2);
	colorDisplay.textContent = pickedColor;
	for(var i=0 ; i<squares.length; i++){
		squares[i].style.background = colors[i];
		if(i>2)
			squares[i].style.display = "none";
	}	
});

hardBtn.addEventListener("click",function(){
	easyOn = false;
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.background = "steelblue"
	colors = generateRandomColors(6);
	pickedColor = pickColor(5);
	colorDisplay.textContent = pickedColor;
	for(var i=0 ; i<squares.length; i++){
		squares[i].style.background = colors[i];
		if(i>2)
			squares[i].style.display = "block";
	}
	
});

resetButton.addEventListener("click",function(){
	h1.style.background = "steelblue";
	colors = generateRandomColors(6);
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	if(easyOn === true)
		pickedColor = pickColor(2);
	else
		pickedColor = pickColor(5);
	colorDisplay.textContent = pickedColor;
	
	for(var i=0 ; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	
});

for( var i=0 ; i<squares.length; i++){
	squares[i].style.background = colors[i];
	
	squares[i].addEventListener("click",function(){
		var currentColor = this.style.background;
		
		if(currentColor === pickedColor){
			messageDisplay.textContent = "Correct !";
			changeColors(currentColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again?";
			
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again !";
		}
	});
}

function changeColors(color){
	for(var i=0 ; i<squares.length ; i++){
		squares[i].style.background = color;
	}
}

function pickColor(num){
	var random = generateRandomNumberTill(num);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0 ; i<num ; i++){
		var color = "rgb("+generateRandomNumberTill(255)+", "+generateRandomNumberTill(255)+", "+generateRandomNumberTill(255)+")";
		arr.push(color);
	}
	return arr;

}

function generateRandomNumberTill(num){
	return Math.floor((Math.random()*num+1));
}