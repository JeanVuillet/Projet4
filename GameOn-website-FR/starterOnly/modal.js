//keydown test


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const body = document.querySelector("body");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn =document.querySelector(".close");
const submitBtn=document.querySelector(".btn-submit");
const form= document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// caching balise inputs 
// let FirstName=document.getElementById("first");
// let LasttName=document.getElementById("last");
// let Email=document.getElementById("email");
// let Birthdate=document.getElementById("birthdate");
// let Quantity=document.getElementById("quantity");

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
    body.addEventListener("keydown",(e)=>{
      if(e.key=="g"){
        alert("check1="+check1);
      }
    })



//cancel defalt submit

form.addEventListener("submit",(event)=>{

  event.preventDefault();
  let last= document.getElementById("last")

});






// //radio buttons show and captation

let checkboxList= document.querySelectorAll('input[name="location"]')
let checkboxValue;


form.addEventListener("submit",(e)=>{
  
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




body.addEventListener("keydown",(e)=>{
  if(e.key =="k"){alert("value"+userLastName)}
})

footer.classList.add("error");



//création div error

let div= document.createElement("div");
div.innerText="coucou je suis le div";
div.setAttribute("style",
"background-color:red;height: 3rem;"+
"display:flex; justify-content: center;"+
" align-items: center;");

//creating error divs
let prenom=document.getElementById("prenom");

let nom=document.getElementById("nom");
let email=document.getElementById("email");
let naissance=document.getElementById("naissance");
let nombre=document.getElementById("nombre");
let radio=document.getElementById("radio");
let cocher=document.getElementById("cocher");

//creating error messages
let errorName="Veuillez entrer 2 caractères ou plus.";
let errorMail="Veuillez entrer une adresse mail valide.";
let errorNaissance="Veuillez entrer une date de naissance valide.";
let errorNombre="Veuillez entrer un nombre.";
let errorRadio="Vous devez choisir une option.";
let errorCocher="Vous devez vérifier que vous acceptez les termes et conditions.";

//création régex
let regexName= new RegExp ("[A-Z]+[a-z]");
let regexMail=new RegExp("[a-z 0-9 .-_]{2}@[A-Z a-z 0-9 .-_]{2}\\.[a-z]{2}");
 let regexNaissance=new RegExp("[1-31]");
 let regexNombre=new RegExp("\\d");
 let regexRadio= new RegExp();
 let regexCocher= new RegExp();

 //crating function captation valiues
 function captationValue (element){
  //serching for strings
 if( document.querySelector("text-control")  )
 
 {
return element.value;
 }}

let Email=document.getElementById("email");
let Birthdate=document.getElementById("birthdate");
let Quantity=document.getElementById("quantity");
 



 //création fonction du div d'error
function divMaker (element,regex,error){
  regex.test(element.querySelector);


 element.parentElement.appendChild(div);
 div.className="aka";

  div.innerText=`l'erreur est ${error}`; 
};
  

  let papa=Quantity.parentElement
  papa.appendChild(div);
// nom.appendChild(div);
// email.appendChild(div);
// naissance.appendChild(div);
// nombre.appendChild(div);
// radio.appendChild(div);
// cocher.appendChild(div);

