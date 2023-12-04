function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// GETTING DOM ELEMENTS

//div formular container
const modalbg = document.querySelector(".bground");

//bouton d'accès au formulaire
const modalBtn = document.querySelectorAll(".modal-btn");
// sousDiv of form
const formData = document.querySelectorAll(".formData");
// btn close  form
const closeBtn = document.querySelector(".close");
// btn submit
const submitBtn = document.querySelector(".btn-submit");


//GENERATING FORMULAR DIV

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close button
closeBtn.addEventListener("click", (ev) => {
  modalbg.style.display = "none";
});





// GETTING FORM ELEMENTS
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radio = document.getElementById("radio");
const chekbox = document.getElementById("checkbox");



//CHECKING FORMULAR

//cancel defalt submit

modalbg.addEventListener("submit", (event) => {

  event.preventDefault();

});



//Generating control functions


function checkFirstNameInput() {

  // Matching error pseudoElement with CSS
  const firstNameInputParent = firstNameInput.parentElement

  //testing value (capital+lowercase)
  const regexName = new RegExp("^[A-Z][a-z]+(-[A-Z][a-z]+){0,1}$");
  let resultTest = regexName.test(firstNameInput.value)
  //generating ErrorMessage
  let errorMessage = "Entrer un Prénom valide (Maj+Min)";
  firstNameInputParent.setAttribute("errorMessage", errorMessage);


  //activating ::after  if error 
  if (!resultTest) {
    firstNameInputParent.setAttribute("errorMessageVisible", true);
    return false;
  }


  //disabeling ::after if error corrected
  else {
    firstNameInputParent.setAttribute("errorMessageVisible", false);
    return true;
  }
}
function checkLastNameInput() {

  // Matching error pseudoElement with CSS
  let lastNameInputParent = lastNameInput.parentElement

  //testing value (capital+lowercase)
  const regexName = new RegExp("^[A-Z][a-z]{0,}([ '][A-Z]['A-Za-z]+){0,2}$");
  resultTest = regexName.test(lastNameInput.value)
  //generating ErrorMessage
  let errorMessage = "Entrer un nom valide (Maj+Min)";
  lastNameInputParent.setAttribute("errorMessage", errorMessage);

  //activating ::after  if error 
  if (!resultTest) {
    lastNameInputParent.setAttribute("errorMessageVisible", true)
    return false;
  }


  //disabeling ::after if error corrected
  else {
    lastNameInputParent.setAttribute("errorMessageVisible", false);
    return true;
  }
}


//CHECKING emailInput

function checkEmailInput() {

  // Matching error pseudoElement with CSS
  let emailInputParent = emailInput.parentElement

  //testing value (capital+lowercase)
  let regexMail = new RegExp("^[a-z0-9.-_]{2,}@[A-Za-z0-9.-_]{2,}\\.[a-z]{2,}");
  resultTest = regexMail.test(emailInput.value)

  //generating ErrorMessage
  let errorMail = "Veuillez entrer une adresse mail valide.";

  emailInputParent.setAttribute("errorMessage", errorMail);


  //activating ::after  if error 

  if (!resultTest) {
    emailInputParent.setAttribute("errorMessageVisible", true);
    return false
  }


  //disabeling ::after if error corrected
  else {
    emailInputParent.setAttribute("errorMessageVisible", false);
    return true;
  }
}



//CHEKING birthDateInput
function getAge(value) {
  let d2 = new Date();
  var diff = d2.getTime() - value.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}


function birthDateInputCheck() {
  //getting Parent
  let birthDateInputParent = birthDateInput.parentElement;

  //capting age

  let age = getAge(new Date(birthDateInput.value));


  //testing value
  let resultTest = (age > 18 && age < 150)

  //generating errordiv if error and no div yet

  let errorMessage =  "Veuillez entrer une date de naissance valide";
  birthDateInputParent.setAttribute("errorMessage", errorMessage);

  if (!resultTest) {
    birthDateInputParent.setAttribute("errorMessageVisible", true);
    return false
  }

  //disabeling ::after if error corrected
  else {
    birthDateInputParent.setAttribute("errorMessageVisible", false);
    return true;
  }

}
// \

//CHEKING QUANTITY
function chekQuantity() {
  //getting Parent
  let quantityInputParent = quantityInput.parentElement;
  //testing value
  let regexQuantity = new RegExp("^\\d+$");
  resultTest = regexQuantity.test(quantityInput.value)
  //generating errordiv if error 
  let QuantityError = "Veuillez entrer un nombre";
  let errorMessage = QuantityError;
  quantityInputParent.setAttribute("errorMessage", errorMessage);

  if (!resultTest) {
    quantityInputParent.setAttribute("errorMessageVisible", true);
    return false
  }

  //disabeling ::after if error corrected
  else {
    quantityInputParent.setAttribute("errorMessageVisible", false);
    return true;
  }


};


//CHEKING RADIOBUTTONS


function checkCheckbox() {

  // capting inputList
  const checkboxList = document.querySelectorAll('input[name="location"]')
  let checkboxValue = false;
  //getting Parent
  const checkboxParent = checkboxList[0].parentElement;

  //capting input=true value IF input (else: input=false);

  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked == true) {
      checkboxValue = checkboxList[i].value;
      break;
    }
    else { checkboxValue == false; }
  }


  //testing value
  let resultTest = checkboxValue;
  let errorMessage =   "Veuillez sélectionner une réponse";
  checkboxParent.setAttribute("errorMessage", errorMessage);

  if (!resultTest) {
    checkboxParent.setAttribute("errorMessageVisible", true);
    return false;
  }

  //disabeling ::after if error corrected
  else {
    checkboxParent.setAttribute("errorMessageVisible", false);
    return true;
  }

}
function conditionsChecked() {

  //capting checkbox values
  let checkBox = document.querySelector('input[id="checkbox1"]');
  let resulTest = checkBox.checked;

  //gettingParent
  let checkboxParent = checkBox.parentElement;

  //acitvating error div
  let errorMessage = "Veuillez valider les conditions ";
  checkboxParent.setAttribute("errorMessage", errorMessage);

  // GENERATING ERRORDIV if false
  if (!resulTest) {
    checkboxParent.setAttribute("errorMessageVisible", true);
    return false;
  }

  //disabeling ::after if error corrected
  else {
    checkboxParent.setAttribute("errorMessageVisible", false);
    return true;
  }
}

//implementing Listeners
firstNameInput.addEventListener("change", (e) => {
  checkFirstNameInput()
});
lastNameInput.addEventListener("change", (e) => {
  checkLastNameInput()
})
emailInput.addEventListener("change", (e) => {
  checkEmailInput()
});
birthDateInput.addEventListener("change", (e) => {

  //alowing birthDateInput full imput befor checking
  let a = new RegExp("^[1-9]");
  if (a.test(birthDateInput.value)) {
    //Cheking value
    birthDateInputCheck();
  }
})
quantityInput.addEventListener("change", (e) => {
  chekQuantity()
})
//checking radio

// checking form on submit
submitBtn.addEventListener('click', (e) => {


  if (

    checkFirstNameInput() &&
    checkLastNameInput() &&
    checkEmailInput() &&
    birthDateInputCheck() &&
    chekQuantity() &&
    checkCheckbox() &&
    conditionsChecked()

  ) {
 


    const formContent = document.getElementById("content");
    const validateDiv = document.getElementById("validate");
    formContent.style.display = "none";
    validateDiv.style.display = "flex";
    const button = document.getElementById("fermer");

    button.addEventListener("click", (e) => {
      modalbg.style.display = "none";
      validateDiv.style.display = "none";
      let formulary = document.getElementById("formulaire");
      formulary.reset();
      formContent.style.display = "flex";

    })

  }

})
























