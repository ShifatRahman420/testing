const btn = document.getElementById('pinBTN');
const output = document.getElementById("input-field").value;



btn.addEventListener('click', () => {
    const pin = (Math.floor(100000 + Math.random() * 900000)); 
    document.getElementById('input-field').value = pin ;
});

const MyResult = document.getElementById("inputext");
let calculator = (number)=>{
    MyResult.value+=number;
}
function clr(){
    MyResult.value="  ";
}


 function DeleteMe() {
     MyResult.value = MyResult.value.slice(0,-1); 

 }


const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click",()=>{
   var matching = document.getElementById("inputext").value;
   const output = document.getElementById("input-field").value;
   const car = parseFloat(matching);
   const bike =parseFloat(output);
   if(car==bike){
    document.getElementById("two").style.display = "block";
    document.getElementById("fast").style.display = "none";
   }
   else{
    document.getElementById("two").style.display = "none";
    document.getElementById("fast").style.display = "block";
    document.getElementById("reSend").style.display = "block";
   }
})
btn.addEventListener("click",()=>{
      document.getElementById("inputext").value =" ";
      document.getElementById("fast").style.display = "none";
      document.getElementById("two").style.display = "none";
      document.getElementById("reSend").style.display = "none";
})

