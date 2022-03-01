
  
const generateBtn = document.querySelector("#submit");
const inputNumberCharacters = document.querySelector("#inputNumberCharacters");
const spanNumberCharacters = document.querySelector("#spanNumberCharacters");


//Form for password criteria should pop up
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
//Form for password criteria should close when close button is clicked
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

// on user changing range input 

// change the display of spanNumberCharacters
inputNumberCharacters.addEventListener('input', function(event){

});


    //first prompt of password criteria is for length of characters 8 - 128
 //window.prompt('How many characters does your password need? \n(Must be between 8 - 128)');
 


// let numberCharacters = 8 
// function checkCharacters() {
//     window.confirm('Would you like your password ' + numberCharacters + 'characters long?');
//     console.log('numberCharacters');
// }
//  numberCharacters();
// window.prompt('Would you like your password ' + numberCharacters + 'characters long?');

//window.confirm;
        //console.log(password.length); (use the .length parameter to specify how long the password needs to be)


    //checkbox (to validate) criteria for type of characters: lowercase, uppercase, numeric, and/or special characters
        //element.render() checkbox        
    //identify password criteria options
//console.log characterSpecifications

    //link checkbox selections to each type of criteria

//prompt if none of the criteria is selected then alert "one or more criteria must be selected"


//let user select password criteria - use let for object

//array each letter of alphabet so each is indexed
//array each special character
//array each number

//if uppercase is selected math.random > 0.5 (give a percentage of the numberCharacters) .toUppercase which will uppercase a random portion of the characters
//math.random to 
//run random password generator to match specific criteria


// then password is displayed as an alert or in text on the box window