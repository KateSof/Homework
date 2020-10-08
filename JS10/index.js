const passInput1 = document.getElementById("input1");
const passInput2 = document.getElementById("input2");
const icons = document.querySelectorAll(".fas");
const error = document.getElementById("error");
error.innerHTML = "";
let button = document.querySelector(".btn");



icons.forEach((item)=>{
  item.addEventListener("click",()=>{
   item.closest("#icon").classList.toggle("fa-eye");
    item.closest("#icon").classList.toggle("fa-eye-slash"); 
    if( item.classList.contains("fa-eye")){
      item.closest(".input-wrapper").firstElementChild.type = "text";
    }
    else if( item.classList.contains("fa-eye-slash")){
      item.closest(".input-wrapper").firstElementChild.type = "password";
    }  
});});




function checkValidation(){

   if(passInput1.value == passInput2.value && passInput1.value !== "" && passInput2.value !== ""){
    error.innerHTML = "";
    alert("You are welcome");
   
   }
   else if(passInput1.value !== passInput2.value ||  passInput1.value == "" && passInput2.value == "" ){
    error.innerHTML = "Нужно ввести одинаковые значения";
    error.style.color = "red";
    
   }
}
button.addEventListener("click",checkValidation);


       
