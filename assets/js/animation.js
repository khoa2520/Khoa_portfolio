const myBtn=document.querySelector(".my-btn");
const alertBox=document.querySelector(".alert-box");
const closeBtn=document.querySelector(".close-alert")     
let timer;
myBtn.addEventListener("click",function () {
     showAlertBox();
})
closeBtn.addEventListener("click",function () {
     hideAlertBox();
     clearTimeout(timer);
})

function showAlertBox(){
   alertBox.classList.remove("hide");
   alertBox.classList.add("show");
   // hide animation onload 
   if(alertBox.classList.contains("hidden")){
       alertBox.classList.remove("hidden");
   }
   timer=setTimeout(function(){
       hideAlertBox();
   },6000)
}
 
function hideAlertBox(){
  alertBox.classList.remove("show");
   alertBox.classList.add("hide");
}