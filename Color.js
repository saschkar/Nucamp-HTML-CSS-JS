var ans;
var guess_input;
var finished = false;
var guesses = 0;
const colorArr = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
colorArr.sort();

function do_game() {
    ans = colorArr[(Math.floor(Math.random() * colorArr.length))];
    console.log(ans);
    while(!finished) {
        guess_input = prompt("I am thinking of one of these colors: \n\n" + "blue, cyan, gold, gray, green, magenta, orange, red, white, yellow.\n\n" + "What color am I thinking of? ");
        guesses += 1;
        finished = check_guess();
    }
}

function changeBackground(ans){
    document.body.style.background = ans;
}

function check_guess(){
    if (guess_input === ans) {
            alert("Congratulations! You have guessed the color! \n\n It took you " + guesses + " guesses to finish the game! \n\n You can see the color in the background")
            changeBackground(ans);
            return true;
    }
    else {
            if (colorArr.includes(guess_input)){
                if(colorArr.indexOf(ans) < colorArr.indexOf(guess_input)){
                    alert("The answer is alphabetically before your answer");
                    return false;
                }
                else if(colorArr.indexOf(ans) > colorArr.indexOf(guess_input)){
                    alert("The answer is alphabetically after your answer");
                    return false;
                }
            }
            else {
                alert("Sorry, I don't recognize your color. \n\n Please try again.")
                return false;
            }
    }
}
