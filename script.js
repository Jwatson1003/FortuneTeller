var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("Input");

executeButton.addEventListener("click", FortuneTeller);

function halfNumber(num) {
  console.log("Half of" + " " + num + " " + "=" + " " + (num/2));
  console.log("Wow that's so cool. Okay Go Back to the Website")
}

console.log(halfNumber(9.1));

// function Restyle() {
//   var text = ["left", "center", "right"];
//   var RandomAlignment = text[Math.floor(Math.random()* text.length))];
//   var Randomcolor = Math.random() * 255;
//   var Randombackgroundcolor = Math.random() * 255;
// }
//
// outputParagraph.style.color.Restyle= RandomColor;
// outputParagraph.style.textAlignment.Restyle= RandomAlignment;
// outputParagraph.style.backgroundcolor.Restyle= RandomBackgroundColor;

function FortuneTeller() {
  var currentInputText = inputElement.value;
  var fortunes = ["A Beautiful, smart, and loving person will be coming into your life", "A faithful friend is a strong defense", "You will die...Sorry", "Death is Coming VERY Soon", "A faithful friend is a strong defense", " A fresh start will put you on your way", "A friend asks only for your time not your money", "A Person is never too old to learn", "A Smooth Long Journey! Great Expectations", "Advice is like kissing. It cost nothing and is a pleasant thing to do", "All your hard work will soon pay off", "Be careful you might fall for some tricks today", "Believe it Can be done", "Bide your time, for success is near", "The presidency will soon be decided", "Get your mind set-confidence will lead you on", "Happy life is just in front of you", "Sad life is just in front of you", "You're gonna step in a puddle and get your shoes dirty", "I hope you get a papercut and lemon juice in it", "Sometimes in life you have to let go of things even if you don't want to in order to better yourself"];
  var selectedFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  outputParagraph.innerHTML = "So" + " " + currentInputText + " " + "You have chosen to be bold. Very Well...Your Fortune is: " +  " " + selectedFortune;
}
