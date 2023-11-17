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
function presentTester(element){
  element=element.parentElement.lastElementChild;
  if(element.className=="error"){
  return true;}
  else {return false;}
}
 // creating errorDiv if not present
 function divCreator(resultTest, present,ErrorMessage){

  if(! present&&!resultTest){
 let div= document.createElement("div");
 div.className="error";
 div.setAttribute("style",
 "background-color:red;height: 3rem;"+
 "display:flex; justify-content: center;"+
 " align-items: center;");
 div.innerText=ErrorMessage;
 FormElement.parentElement.appendChild(div);

}
}
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
let regexName= new RegExp ("[A-Z]+[a-z]+");
let regexMail=new RegExp("[a-z0-9.-_]{2}@[A-Za-z0-9.-_]{2}\\.[a-z]{2}");
                    

//birthdate control
function getAge(value){
  let d2 = new Date();
  var diff = d2.getTime() - value.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
function controlAge (age) {

  

 if (age<18 || age>150){
  return false
 }
 else{return true;}

  
}

//quantity control
 let regexQuantity=new RegExp("\\d");
 let regexRadio= new RegExp();
 let regexTcheck= new RegExp();

 //creating error messages
let errorName="Veuillez entrer 2 caractères ou plus.";
let errorMail="Veuillez entrer une adresse mail valide.";
let errorBirthdate="Veuillez entrer une date de naissance valide.";
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
let FormElement;
//CHECKING FIRSTNAME
FirstName.addEventListener("change",(e)=>
{ //capting element
  FormElement=FirstName;
  //capting value
  value= FirstName.value;
  //testing value
  resultTest= regexName.test(value)
  //testing errorDiv presence
   let present=presentTester(FirstName);

  //genrating error div if error and no div yet
divCreator(resultTest,present, errorName)
  //removing errordiv if error corrected

   if(resultTest && present){
    let parent=FormElement.parentElement;
parent.removeChild(parent.lastChild);
  }


});
//CHEKING LASTNAME
LastName.addEventListener("change",(e)=>
{ 
  //capting value
  value= LastName.value;
  //testing value
  resultTest= regexName.test(value)
  //testing errorDiv presence
  present=(document.querySelector(".error"))

  //genrating error div if error and no div yet
if(!resultTest && !present){
errorDiv(LastName,errorName);}
  //removing errordiv if error corrected

  else if(resultTest && present){
LastName.parentElement.removeChild(div);
  }
});

//CHECKING MAIL
Email.addEventListener("change",(e)=>
{ 
  //capting value
  value= Email.value;
  //testing value
  resultTest= regexMail.test(value)
  //testing errorDiv presence
  present=(document.querySelector(".error"))

  //genrating error div if error and no div yet
if(!resultTest && !present){
errorDiv(Email,errorMail);}
  //removing errordiv if error corrected

  else if(resultTest && present){
Email.parentElement.removeChild(div);
  }
});

//CHEKING BIRTHDATE

Birthdate.addEventListener("input",(e)=>

//Making this fuking textfield leting me input date
  { a= new RegExp("^[1-9]");
    if(a.test(Birthdate.value)){

      //input reacts properly
  let a=new Date(Birthdate.value);
  alert(a.getTime());
  //capting value
   present=(document.querySelector(".error"))
   let age =getAge(a);


  //testing value
let resultTest=controlAge(age);

//generating errordiv if error and no div yet
if(!resultTest && !present){
  errorDiv(Birthdate,errorBirthdate);}
  else if(resultTest && present){
    Birthdate.parentElement.removeChild(div);
      }
    }
    });


//CHEKING QUANTITY
Quantity.addEventListener("change",(e)=>
{ 
  //capting value
  value= Quantity.value;
  //testing value
  resultTest= regexQuantity.test(value)
  //testing errorDiv presence
  let present=(document.querySelector(".error"))

  //genrating error div if error and no div yet
if(!resultTest && !present){
errorDiv(Quantity,errorQuantity);}
  //removing errordiv if error corrected

  else if(resultTest && present){
Quantity.parentElement.removeChild(div);
  }
});


//CHEKING RADIOBUTTONS

submitBtn.addEventListener('click',(e)=>{

// capting inputList
let checkboxList= document.querySelectorAll('input[name="location"]')
let checkboxValue=false;


//capting input=true value IF input (else: input=false);
  
  for( let i=0; i<checkboxList.length; i++){
    if(checkboxList[i].checked==true){
   checkboxValue=checkboxList[i].value;
  break;
    }
  else{checkboxValue==false;}}
  
//testing errorDiv presence
present=(document.querySelector(".error"))
  //testing value
  let resultTest=checkboxValue;

//genrating error div if error and no div yet
if(!resultTest && !present){
errorDiv(checkboxList[0],errorRadio);}
//removing errordiv if error corrected

else if(resultTest && present){
Quantity.parentElement.removeChild(div);
}
;


});



//CHEKING VALIDATION CONDITIONS
submitBtn.addEventListener('click',(e)=>{



    //capting checkbox values
    let check1=document.querySelector('input[id="checkbox1"]');
    let check2=document.querySelector('input[id="checkbox2"]')
    check1=check1.checked;
    check2=check2.checked;
    let resultTest=Boolean;
// testing values
if(check1&&check2){
   resultTest= true;
}
else { resultTest=false;}
  

//genrating error div if error and no div yet
let checkbox1=document.getElementById("checkbox1");
if(!resultTest && !present){

  errorDiv(checkbox1,errorChekbox);}

  //removing errordiv if error corrected
  
  else if(resultTest && present){
  checkbox1.parentElement.removeChild(div);
  }
  ;

    });



















