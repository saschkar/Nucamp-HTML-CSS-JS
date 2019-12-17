var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
    //var random_number = Math.random()*50;
    //var random_number_integer = Math.floor(random_number);
    //target = random_number_integer + 1; 
    target = getRandomInt(0, 50);
    while(!finished) {
        guess_input_text = prompt("I am thinking of a number " + "in the range 10 to 50.\n\n" + "What is the number? ");
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function check_guess() {
    if (isNaN(guess_input)) {
        alert("You have not entered a number .\n\n" + "Please enter a number in the range 10 to 50.");
        return false;
    }
    if ((guess_input < 10) || (guess_input > 50)){
        alert("Please enter an integer in number in the range 10 to 50.");
        return false;
    }
    if (guess_input > target) {
		alert("Your number is too large!");
		return false;
	}
	if (guess_input < target) {
		alert("Your number is too small!");
		return false;
	}
	alert("You got it! The number was " + target +
	".\n\nIt took you " + guesses +
	" guesses to get the number!");
	return true;
}