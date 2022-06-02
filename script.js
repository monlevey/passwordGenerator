
//  Specific names that define the input over usage 
const generateBtn = document.querySelector("#submit");
const inputNumberCharacters = document.querySelector("#inputNumberCharacters");
const displayNumberCharacters = document.querySelector("#spanNumberCharacters");
const inputLowercase = document.getElementById('inputLowercase');
const inputUppercase = document.getElementById('inputUppercase');
const inputNumber = document.getElementById('inputNumber');
const inputSymbol = document.getElementById('inputSymbol');
const textareaPassword = document.getElementById("password");
const error = document.querySelector('.error');
const blurOpenButton = document.querySelector('.open-button');

//array each letter of alphabet so each is indexed
const lowercaseSet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//array each symbol
const symbolSet = '<>.,*&^%$#@!?'
//array each number
const numberSet = '0123456789'

// call the function to display slider information
displayNumberCharactersInSpan();


//Form for password criteria should pop up
function openForm() {
    document.getElementById("myForm").style.display = "block";
 //When form has popped up turn open-button white 
  if(display = "block") {
      blurOpenButton.setAttribute("style", "background-color: white; color: white; box-shadow: white;");
  }
}
//Form for password criteria should close when close button is clicked
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
// when form is closed regular styles return
    if(display = "block") {
        blurOpenButton.setAttribute("style", "");
    }
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

    let charset = '';

    //use lowercase
    const confirmLowercase = inputLowercase.checked;
    console.log(confirmLowercase);
    //use uppercase
    const confirmUppercase = inputUppercase.checked;
    console.log(confirmUppercase);
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
    if(confirmUppercase){
        charset = charset + uppercaseSet;
    }
    if(confirmNumber){
        charset = charset + numberSet;
    }
    if(confirmSymbol){
        charset = charset + symbolSet;
    }

//prompt if none of the criteria is selected then alert "one or more criteria must be selected"
    error.textContent = '';

    if(!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSymbol){
        error.textContent = "We cannot create a password from thin air. CHECK A BOX PLEASE!";
        return;
    }


    // Number of characters to use
    let password = '';
    for (let i = 0; i < passwordLength; i++) {

        // generate a random character from the selection
        const randomIndex = Math.floor(Math.random() * charset.length);

        const randomCharacter = charset[randomIndex];
        // add character to the end of the previous character one at a time
    password = password + randomCharacter;
    }
    console.log(password);

    // then password is displayed as an alert or in text on the box window

    textareaPassword.textContent = password;

});


