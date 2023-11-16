function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



//


// GETTING ELEMENTS

// DOM Elements

//formulaire
const modalbg = document.querySelector(".bground");
//bouton d'accès au formulaire
const modalBtn = document.querySelectorAll(".modal-btn");
// sousDiv du formulaire
const formData = document.querySelectorAll(".formData");
// btn close du formulaire
const closeBtn =document.querySelector(".close");
// btn submit
const submitBtn=document.querySelector(".btn-submit");
//

// getting formElements
let FirstName=document.getElementById("first");
let LasttName=document.getElementById("last");
let Email=document.getElementById("email");
let Birthdate=document.getElementById("birthdate");
let Quantity=document.getElementById("quantity");

//créating regex
let regexName= new RegExp ("[A-Z]+[a-z]");
let regexMail=new RegExp("[a-z 0-9 .-_]{2}@[A-Z a-z 0-9 .-_]{2}\\.[a-z]{2}");
 let regexNaissance=new RegExp("[1-31]");
 let regexNombre=new RegExp("\\d");
 let regexRadio= new RegExp();
 let regexCocher= new RegExp();

 //creating error messages
let errorName="Veuillez entrer 2 caractères ou plus.";
let errorMail="Veuillez entrer une adresse mail valide.";
let errorNaissance="Veuillez entrer une date de naissance valide.";
let errorNombre="Veuillez entrer un nombre.";
let errorRadio="Vous devez choisir une option.";
let errorCocher="Vous devez vérifier que vous acceptez les termes et conditions.";

 //creating testFunctions
 function textfieldCaptor (Field){
  let value=Field.value;
  return value;

 }
 // creating errorDiv
 let div= document.createElement("div");
 div.className="error";
 div.setAttribute("style",
 "background-color:red;height: 3rem;"+
 "display:flex; justify-content: center;"+
 " align-items: center;");

  



//creating errorDivMaker
function errorDiv(formElement, ErrorMessage){
  div.innerText=ErrorMessage;
  formElement.parentElement.appendChild(div);}




//CHECKING FIRSTNAME
FirstName.addEventListener("change",(e)=>
{ 
  //capting value
  value= textfieldCaptor(FirstName)
  //testing value
  resultTest= regexName.test(value)
  //testing errorDiv presence
  let present=(document.querySelector(".error"))

  //genrating error div if error and no div yet
if(!resultTest && !present){
errorDiv(FirstName,errorName);}
  //removing errordiv if error corrected

  else if(resultTest && present){
FirstName.parentElement.removeChild(div);
  }


});

// applying


//controling functions



function verification(event){


  //conroling textfield

  if(event.class="text-controle")

  {let value=event.value}

  //controling tcheckbox imput

if(event.class="checkbox-input")


  //returning controle result
  return a;
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// caching balise inputs 


// let btn=document.querySelector("button");



// close button

closeBtn.addEventListener("click",(ev)=>{
  modalbg.style.display="none";
});

// entery field captation
// let userFirstName=baliseFirstName.value;
// let userLastName=baliseLasttName.value;
// let userEmail=baliseEmail.value;
// let userBirthday=baliseBirthdate.value;
// let userQuantity=baliseQuantity.value;

    //checkbox captation
    let check1=document.querySelector('input[id="checkbox1"]');
    let check2=document.querySelector('input[id="checkbox2"]')
    check1=check1.checked;
    check2=check2.checked;


    //g key test captor
 
    document.addEventListener("keydown",(e)=>{
      if(e.key=="g"){
      modalbg.style.backgroundColor="pink";
      }
    })



//cancel defalt submit

modalbg.addEventListener("submit",(event)=>{

  event.preventDefault();
  let last= document.getElementById("last")

});






// //radio buttons show and captation

let checkboxList= document.querySelectorAll('input[name="location"]')
let checkboxValue;


modalbg.addEventListener("submit",(e)=>{
  
  for( let i=0; i<checkboxList.length; i++){
    if(checkboxList[i].checked==true){
  checkboxValue=checkboxList[i].value;
  break;
    }
  }
  
  alert("value:"+checkboxValue)});

// REGEX TEST ONE

// FirstName.addEventListener("change",(e)=>{
  



//   if(numRegex.test(FirstName.value)==false){alert("il faut deux lettres (n'oublie pas la majuscule)");}

//   else if (champ=="connard"){alert("va te faire foutre!");}
// });



  //test keydown




document.addEventListener("keydown",(e)=>{
  if(e.key =="k"){alert("value"+userLastName)}
})







//accession aux divs
// let prenom=document.getElementById("prenom");

// let nom=document.getElementById("nom");
// let email=document.getElementById("email");
// let naissance=document.getElementById("naissance");
// let nombre=document.getElementById("nombre");
// let radio=document.getElementById("radio");
// let cocher=document.getElementById("cocher");

//création div error






 //crating function captation valiues
 function captationValue (element){
  //serching for strings
 if( document.querySelector("text-control")  )
 
 {
return element.value;
 }}

 



