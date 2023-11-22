function editNav() {
  var x = document.getElementById("myTopnav");
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
const closeBtn =document.querySelector(".close");
// btn submit
const submitBtn=document.querySelector(".btn-submit");

//CREATING ERROR DIV
//Testing if div present



//GENERATING FORMULAR DIV

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close button
closeBtn.addEventListener("click",(ev)=>{
  modalbg.style.display="none";
});





// GETTING FORM ELEMENTS
let FirstName=document.getElementById("first");
let LastName=document.getElementById("last");
let Email=document.getElementById("email");
let Birthdate=document.getElementById("birthdate");
let Quantity=document.getElementById("quantity");
let Radio=document.getElementById("radio");
let Chekbox=document.getElementById("checkbox");


//CREATING REGEXP and Controls

//Text control


                    

//birthdate control


//quantity control

 let regexRadio= new RegExp();
 let regexTcheck= new RegExp();

 //creating error messages
let errorName="Veuillez entrer 2 caractères ou plus.";


let errorQuantity="Veuillez entrer un nombre.";
let errorRadio="Vous devez choisir une option.";
let errorChekbox="Vous devez vérifier que vous acceptez les termes et conditions.";

 //creating testFunctions
 function textfieldCaptor (Field){
  let value=Field.value;
  return value;

 }


  









//CHECKING FORMULAR

//cancel defalt submit

modalbg.addEventListener("submit",(event)=>{

  event.preventDefault();
  let last= document.getElementById("last")

});



//Generating ErrorDivName function


function CheckFirstname (){

  // Matching error pseudoElement with CSS
let firstNameParent= FirstName.parentElement

  //testing value (capital+lowercase)
  let regexName= new RegExp ("[A-Z]+[a-z]+");
  resultTest= regexName.test(FirstName.value)
//generating ErrorMessage
let errorMessage="Le nom doit commencer par une majuscule et comporter au moins 2 caractères";
firstNameParent.setAttribute("errorMessage",errorMessage);
  

  //activating ::after  if error 
if(!resultTest ){
  firstNameParent.setAttribute("errorMessageVisible",true);
return false;
}
  
  
  //disabeling ::after if error corrected
  else {
firstNameParent.setAttribute("errorMessageVisible",false);
return true;
  } 
}
function CheckLastname (){

  // Matching error pseudoElement with CSS
let LastNameParent= LastName.parentElement

  //testing value (capital+lowercase)
  let regexName= new RegExp ("[A-Z]+[a-z]+");
  resultTest= regexName.test(LastName.value)
//generating ErrorMessage
let errorMessage="Le nom doit commencer par une majuscule et comporter au moins 2 caractères";
LastNameParent.setAttribute("errorMessage",errorMessage);
  

  //activating ::after  if error 
if(!resultTest ){
  LastNameParent.setAttribute("errorMessageVisible",true)
return  false;
}
  
  
  //disabeling ::after if error corrected
  else {
LastNameParent.setAttribute("errorMessageVisible",false);
return true;
  } 
}



//CHEKING LASTNAME







//CHECKING EMAIL

function CheckEmail (){

  // Matching error pseudoElement with CSS
let EmailParent= Email.parentElement

  //testing value (capital+lowercase)
  let regexMail=new RegExp("[a-z0-9.-_]{2}@[A-Za-z0-9.-_]{2}\\.[a-z]{2}");
  resultTest= regexMail.test(Email.value)
//generating ErrorMessage
let errorMail="Veuillez entrer une adresse mail valide.";

EmailParent.setAttribute("errorMessage",errorMail);
  

  //activating ::after  if error 
  let errorBirthdate="Veuillez entrer une date de naissance valide.";
if(!resultTest ){
  EmailParent.setAttribute("errorMessageVisible",true);
return false}
  
  
  //disabeling ::after if error corrected
  else {
EmailParent.setAttribute("errorMessageVisible",false);
return true;
  } 
}



//CHEKING BIRTHDATE
function getAge(value){
  let d2 = new Date();
  var diff = d2.getTime() - value.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}


function BirthdateCheck(){
  //getting Parent
  let BirthdateParent=Birthdate.parentElement;

  //capting age

   let age =getAge(new Date(Birthdate.value));


  //testing value
let resultTest=(age>18 && age<150)

//generating errordiv if error and no div yet
let BirthdateError="Veuillez entrer une date de naissance valide"
let errorMessage=BirthdateError;
BirthdateParent.setAttribute("errorMessage",errorMessage);

if(!resultTest ){
  BirthdateParent.setAttribute("errorMessageVisible",true);
return false}

  //disabeling ::after if error corrected
  else {
BirthdateParent.setAttribute("errorMessageVisible",false);
return true;
  } 
    
}
// \

//CHEKING QUANTITY
function chekQuantity()
{ 
//getting Parent
let QuantityParent=Quantity.parentElement;
  //testing value
  let regexQuantity=new RegExp("^[0-9]*$");
  resultTest= regexQuantity.test(Quantity.value)
//generating errordiv if error 
let QuantityError="Veuillez entrer un nombre";
let errorMessage=QuantityError;
QuantityParent.setAttribute("errorMessage",errorMessage);

if(!resultTest ){
  QuantityParent.setAttribute("errorMessageVisible",true);
return false}

  //disabeling ::after if error corrected
  else {
QuantityParent.setAttribute("errorMessageVisible",false);
return true;
  } 
    

};


//CHEKING RADIOBUTTONS


function checkCheckbox(){

// capting inputList
let checkboxList= document.querySelectorAll('input[name="location"]')
let checkboxValue=false;
//getting Parent
let checkboxParent=checkboxList[0].parentElement;

//capting input=true value IF input (else: input=false);
  
  for( let i=0; i<checkboxList.length; i++){
    if(checkboxList[i].checked==true){
   checkboxValue=checkboxList[i].value;
  break;
    }
  else{checkboxValue==false;}}
  

  //testing value
  let resultTest=checkboxValue;

  let chekboxError="Veuillez sélectionner une réponse";
  let errorMessage=chekboxError;
  checkboxParent.setAttribute("errorMessage",errorMessage);
  
  if(!resultTest ){
    checkboxParent.setAttribute("errorMessageVisible",true);
  return false;}
  
    //disabeling ::after if error corrected
    else {
  checkboxParent.setAttribute("errorMessageVisible",false);
  return true;
    } 

  }
function conditionsChecked(){

    //capting checkbox values
    let check1=document.querySelector('input[id="checkbox1"]');
    
   let resulTest=check1.checked;
//gettingParent
let checkboxParent=check1.parentElement;
//acitvating error div
let checkError="Veuillez valider les conditions ";
let errorMessage=checkError;
checkboxParent.setAttribute("errorMessage",errorMessage);
// GENERATING ERRORDIV if false
if(!resulTest ){
  checkboxParent.setAttribute("errorMessageVisible",true);
  return false;}
  //disabeling ::after if error corrected
  else {
checkboxParent.setAttribute("errorMessageVisible",false);
return true;
  } 
}

//implementing Listeners

LastName.addEventListener("change",(e)=>
{ 
CheckLastname()
});
FirstName.addEventListener("change",(e)=>{
  CheckLastname()
})
Email.addEventListener("change",(e)=>{
  CheckEmail()
});
Birthdate.addEventListener("change",(e)=>{

  //alowing birthdate full imput befor checking
    let a= new RegExp("^[1-9]");
    if(a.test(Birthdate.value)){
      //Cheking value
      BirthdateCheck();
}})
Quantity.addEventListener("change",(e)=>{
  chekQuantity()
})
//checking radio
submitBtn.addEventListener('click',(e)=>{
  alert(  CheckFirstname());
  alert(   CheckLastname());
   alert( CheckEmail());
    alert(    BirthdateCheck());
    alert(chekQuantity());
    alert(    checkCheckbox());
    alert(  conditionsChecked());



  if(

    CheckFirstname()&&
    CheckLastname()&&
    CheckEmail()&&
    BirthdateCheck()&&
    chekQuantity()&&
    checkCheckbox()&&
    conditionsChecked()
    
  ){
    alert("form validé")
  }
 
})
























