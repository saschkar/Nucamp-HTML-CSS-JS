let numberOfFaces = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
const theBody = document.getElementsByTagName("body")[0];
function generateFaces(){
    for(i=0; i<numberOfFaces; i++){
        const x = document.createElement("img")
        x.src="smile.png";
        console.log(x);
        let randLeft = Math.floor(Math.random()*400) + 1;
        let randTop = Math.floor(Math.random()*400) + 1;
        x.style.top = randTop + "px";
        x.style.left = randLeft + "px"
        theLeftSide.appendChild(x);
    }
    let leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.onclick=function nextLevel(event){
        event.stopPropagation();
        while(theLeftSide.firstChild)
            theLeftSide.removeChild(theLeftSide.firstChild);
        while(theRightSide.firstChild)
            theRightSide.removeChild(theRightSide.firstChild);
        numberOfFaces += 5;
        generateFaces();
    }
    theBody.onclick = function gameOver() {
        let a = confirm("Game Over! \n\n Would you like to play again?")
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
        if (a== true)
            location.reload(true);
    }
}

