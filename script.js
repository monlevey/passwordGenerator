
//  Specific names that are define the input over usage 
const generateBtn = document.querySelector("#submit");
const inputNumberCharacters = document.querySelector("#inputNumberCharacters");
const displayNumberCharacters = document.querySelector("#spanNumberCharacters");
const inputLowercase = document.getElementById('inputLowercase');
const inputUppercase = document.getElementById('inputUppercase');
const inputNumber = document.getElementById('inputNumber');
const inputSymbol = document.getElementById('inputSymbol');

//array each letter of alphabet so each is indexed
const lowercaseSet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//array each symbol
const symbolSet = '<>.,*&^%$#@!?'
//array each number
const numberSet = '0123456789'


displayNumberCharactersInSpan();


//Form for password criteria should pop up
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
//Form for password criteria should close when close button is clicked
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


// on user changing range input change the display of spanNumberCharacters
function displayNumberCharactersInSpan(){
    // identify slider value
    const passwordLength = inputNumberCharacters.value;
    //change text content of number of characters in span to match
    displayNumberCharacters.textContent = passwordLength;
}


//change the number of characters slider 
inputNumberCharacters.addEventListener('input', function(event){
    displayNumberCharactersInSpan();
});
  
// when I click on the SUBMIT button
generateBtn.addEventListener('click', function(event){
    console.log(event);
    //let user select password criteria: 
    // use password length input
    const passwordLength = Number(inputNumberCharacters.value);

    //use lowercase
    const confirmLowercase = inputLowercase.checked;
    console.log(confirmLowercase);
    //use uppercase
    const confimUppercase = inputUppercase.checked;
    console.log(confimUppercase);
   //use numbers
   const confirmNumber = inputNumber.checked;
   console.log(confirmNumber);
    //use symbols
    const confirmSymbol = inputSymbol.checked;
    console.log(confirmSymbol);
    
    // When user has selected the options they want
    if(confirmLowercase){
        charset = charset + lowercaseSet;
    }
    if (confirmUppercase){
        charset = charset + uppercaseSet;
    }
    if(confirmNumber){
        charset = charset + numberSet;
    }
    if(confirmSymbol){
        charset = charset + symbolSet;
    }

    console.log(charset);

    // Number of characters characters to use
    let password = '';
    for (let i = 0; i < passwordLength; i++) {

        // generate a random character from the selection
        const randomIndex = Math.floor(Math.random() * charset.length);

        const randomCharacter = charset[randomIndex];
        // add character to the end of the previous character one at a time
    }





});



//prompt if none of the criteria is selected then alert "one or more criteria must be selected"




//array each letter of alphabet so each is indexed
//array each special character
//array each number

//if uppercase is selected math.random > 0.5 (give a percentage of the numberCharacters) .toUppercase which will uppercase a random portion of the characters
//math.random to 
//run random password generator to match specific criteria


// then password is displayed as an alert or in text on the box window