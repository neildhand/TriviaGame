var questionNumber = 0;
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var chD;
var correct = 0;



var questions = [
	["What is the most common type of star found in the Milky Way?",
		"A. Red Giant Star",
		"B. White Dwarf Star",
		"C. Red Dwarf Star",
		"D. Neutron Stars",
		
		"C"
	],

	["What is the farthest distance from Earth a manned mission has traveled? (plus/minus 20,000 miles)",
			"A. 248,655 miles",
			"B. 112,435 miles",
			"C. 319,982 miles",
			"D. 156,908 miles",
			
			"A"],

	["How many moons does Jupiter have?",
			"A. 181",
			"B. 82",
			"C. 67",
			"D. 51",
			
			"C"],
	["The first human-made object to land on the moon was launched by what country?",
			"A. United States",
			"B. The Soviet Union",
			"C. China",
			"D. Japan",
			
			"B"],
	["What planet in our solar system has the most gravity?",
			"A. Jupiter",
			"B. Venus",
			"C. Saturn",
			"D. Earth",
			
			"A"]
];

function renderQuestion(){
	test = document.getElementById("test");

	if(questionNumber >= questions.length){
		test.innerHTML = "<h2>You've got " + correct + " out of " +questions.length + " correct";
		document.getElementById("test_status").innerHTML = "Test Completed";
		questionNumber = 0;
		correct = 0;
		return false;
	}

	document.getElementById("test_status").innerHTML = "Question: " + (questionNumber + 1) + " out of " + questions.length;
	question = questions[questionNumber][0];
	chA = questions[questionNumber][1];
	chB = questions[questionNumber][2];
	chC = questions[questionNumber][3];
	chD = questions[questionNumber][4];

	test.innerHTML = "<h3>" + question + "</h3>";
	test.innerHTML += "<input type ='radio' name='choices' value='A'>" + chA + "<br>";
	test.innerHTML += "<input type ='radio' name='choices' value='B'>" + chB + "<br>";
	test.innerHTML += "<input type ='radio' name='choices' value='C'>" + chC + "<br>";
	test.innerHTML += "<input type ='radio' name='choices' value='D'>" + chD + "<br><br>";
	test.innerHTML += "<button onclick = 'checkAnswer()'> Submit </button>";



}

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[questionNumber][5]) {
		correct++;
	}
	else{
		var correctAnswer = questions[questionNumber][5];
		alert("Answer incorrect. The correct answer is: " + correctAnswer);
	}
	questionNumber++;
	renderQuestion();
}

window.addEventListener("load", renderQuestion, false);



