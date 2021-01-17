// make local names just to save typing later
let startBtn = document.querySelector("#start");
let swapBtn = document.querySelector("#swap");
	

// define what should happen when click each of the 3 buttons
startBtn.addEventListener("click",startBtnHandler,false);
swapBtn.addEventListener("click",swapBtnHandler,false);

function swapBtnHandler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";
	showingSwap.style.display = "block";
}



function startBtnHandler( ) {
    //Ask the user for inputs
    let array1 = [];
    let array2 = [];

    for(let i=0; i<3; i++){
        array1.push(prompt("Please enter a word."));
    }

    displayList(array1, "displayingInputs");

    array2 = array1.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    });
    
    displayList(array2, "displayingResults");

    startBtn.style.display = "none";
    swapBtn.style.display = "block";
}

function displayList(array, idName){
    for(let i=0; i<3; i++){
        let li = document.createElement("li");
        document.getElementById(idName).appendChild(li);
        li.innerHTML = array[i];
    }
}