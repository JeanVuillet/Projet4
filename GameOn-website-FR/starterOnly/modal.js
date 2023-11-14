//keydown test
document.body.addEventListener("keydown", (ev)=>{
  if(ev.key == "n"){   
     
alert("last value is");

}});

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn =document.querySelector(".close");
const submitBtn=document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// caching balise inputs 
let baliseFirstName=document.getElementById("first");
let baliseLasttName=document.getElementById("last");
let baliseEmail=document.getElementById("email");
let baliseBirthdate=document.getElementById("birthdate");
let baliseQuantity=document.getElementById("quantity");
let form =document.getElementById("formulaire");
let btn=document.querySelector("button");

// alert FirstName with key 
document.body.addEventListener("keydown", (ev)=>{
  if(ev.key == "a"){alert("la saisie est " +baliseFirstName.value);}
});

// close button

closeBtn.addEventListener("click",(ev)=>{
  modalbg.style.display="none";
});

// entery field captation
 let userFirstName=baliseFirstName.value;
    let userLastName=baliseLasttName.value;
    let userEmail=baliseEmail.value;
    let userBirthday=baliseBirthdate.value;
    let userQuantity=baliseQuantity.value;

    //radio buttons captation

//cancel defalt submit

form.addEventListener("submit",(event)=>{

  event.preventDefault();
  let last= document.getElementById("last")
  alert("coucou")
});




//solution


//keydown test
document.body.addEventListener("keydown", (ev)=>{
  if(ev.key == "n"){   
     
alert("last value is"+couleur);

}});
// affiche la valeur du radio coché


let baliseCouleur = document.querySelectorAll('input[name="location"]')
let couleur = ""

console.log(couleur) // affiche la valeur du radio coché

document.body.addEventListener("keydown", (ev)=>{
  if(ev.key == "n"){   
    for (let i = 0; i < baliseCouleur.length; i++) {
    if (baliseCouleur[i].checked) {
        couleur = baliseCouleur[i].value
        break
    }
}
alert("last value is"+couleur);

}});

kljhl