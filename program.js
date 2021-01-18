// make local names just to save typing later
let startBtn = document.querySelector("#start");
let swapBtn = document.querySelector("#swap");

// define what should happen when click each of the buttons
startBtn.addEventListener("click",startBtnHandler,false);
swapBtn.addEventListener("click",swapBtnHandler,false);


function swapBtnHandler( ) {
	// Hides the original section, shows the one with the swapped words
	introScreen.style.display = "none";
	showingSwap.style.display = "block";
}

function startBtnHandler( ) {
    let array1 = [];
    let array2 = [];

    //Asks the user for 3 inputs, puts them into an array
    for(let i=0; i<3; i++){
        array1.push(prompt("Please enter a word."));
    }

    displayList(array1, "displayingInputs");

    //Creates the second array with the first and last letters of each word swapped
    array2 = array1.map(function(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    });
    
    displayList(array2, "displayingResults");

    //Hides the start button and makes the swap button visible
    startBtn.style.display = "none";
    swapBtn.style.display = "block";
}

//Displays the array contents in an unordered list to the specified html id
function displayList(array, idName){
    for(let i=0; i<array.length; i++){
        let li = document.createElement("li");
        document.getElementById(idName).appendChild(li);
        li.innerHTML = array[i];
    }
}