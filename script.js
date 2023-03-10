
// select buttons
const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn");
const errorMessage = document.querySelector("#error-message");
const numOfNotes = document.querySelectorAll(".numofNotes");
const typeofNotes = ["2000", "500", "100", "20", "10", "5", "1"];


/* add event listner */
checkButton.addEventListener("click", function(){
    /*---Validate Bill Amount and given cash*/
    errorMessage.style.display = "none";
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            console.log(cashGiven.value);
            console.log(billAmount.value);
            /*----Calculate the amount to be returned-----*/
            let amountToBeReturned = cashGiven.value - billAmount.value;
            if(amountToBeReturned > 0)
                calculateTheChangeNotes(amountToBeReturned);
        }
        else if(cashGiven.value < billAmount.value){
            console.log(cashGiven.value);
            console.log(billAmount.value);
            showError("We are running short of staff for dishwashers..!!, Do you want join?")
            for(let i = 0; i < typeofNotes.length; i++){
                numOfNotes[i].innerText = 0;
            }
        }
    }
    else{
        showError("Invalid Bill Amount");
    }
})

/*--- Error function ---*/
    function showError(message){
        errorMessage.style.display = "block";
        errorMessage.innerText = message;
    };

/*---- Calculating the change---*/
    function calculateTheChangeNotes(amountToBeReturned){
        for(let i = 0; i < typeofNotes.length; i++){
            // Calculating the number of notes
            let numberofNotes = parseInt(amountToBeReturned / typeofNotes[i]);
            amountToBeReturned %= typeofNotes[i];
            numOfNotes[i].innerText = numberofNotes;
        }
    }

  