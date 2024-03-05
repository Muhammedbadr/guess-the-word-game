let wordToGuess = "";
const words = ["Apples",
    "Bananas",
    "Oranges",
    "Strawberries",
    "Grapes",
    "Watermelons",
]
wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase()




// ### game name 
let gamename = "guess the word "
document.title = gamename ;
document.querySelector("h1").innerHTML = gamename
document.querySelector("footer").innerHTML = `${gamename} go play `

//############ setting game try

let namberoftry = 6;
let numberofletter = 6;
let currentTry = 1;

function generateinport() {
    const inportContainer = document.querySelector(".inputs");

    for (let i = 1; i <= namberoftry; i++) {
        /**
         * creates a div element for each try
         * @param {number} i - the index of the try
         */
        const trydiv = document.createElement("div");
        trydiv.classList.add(`try-${i}`);
        trydiv.innerHTML = `<span>Try ${i}</span>`;

        if (i!== 1) trydiv.classList.add("disabled-input");

        //@@ cerret input
        for (let j = 1; j <= numberofletter; j++) {
            /**
             * creates an input field for each letter in the try
             * @param {number} i - the index of the try
             * @param {number} j - the index of the letter
             */
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letters-${j}`;
            input.setAttribute("maxlength", "1");
            trydiv.appendChild(input);
        }

        inportContainer.appendChild(trydiv);
    }
    inportContainer.children[0].children[1].focus()
    
    const inportindisibl = document.querySelectorAll(".disabled-input input")
    inportindisibl.forEach((input) => (input.disabled = true))

    //toUpperCase
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input , index)=> {
        input.addEventListener("input",function()
        {
            this.value = this.value.toUpperCase()
            console.log(index)

            const nextInput = inputs[index + 1]
            if (nextInput) nextInput.focus()
        })
        input.addEventListener("keydown" , function(event){
            //console.log(this)
            const createInput = Array.from(inputs).indexOf(event.target)
            //console.log(nextInput)
            if  (event.key === "ArrowRight"){
                const nextInput = createInput + 1
                if (nextInput < inputs.length) inputs[nextInput].focus()
            }
            if  (event.key === "ArrowLeft"){
                const prevInput = createInput - 1
                if (prevInput >= 0) inputs[prevInput].focus()
            }
    })
    })
}


// button 
const guessbutton = document.querySelector(".check")
guessbutton.addEventListener("check" , handGuesses)

function handGuesses(){
    let successGuess = true;
    console.log(wordToGuess);
    for(let i =1 ; i <= numberofletter ; i++){
        const inputfiled = document.querySelector(`#guess-${currentTry}-letter-${i}`)
        const letter = inputfiled.value.toLowerCase()
        const actualletter = wordToGuess[i -1 ]
    }
}


window.onload = function(){
    generateinport()
}
window.scroll=function(){
    console.log()
}