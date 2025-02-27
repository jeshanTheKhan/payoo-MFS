document.getElementById("login-btn").addEventListener("click",function(event){
  event.preventDefault();
  const accountNumber = document.getElementById("account-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  if(accountNumber.length === 11 && pinNumber.length === 4)
    if(pinNumber == 1234){
    // console.log(accountNumber,pinNumber);
    window.location.href="../pages/main.html"
  }
  else{
    alert("Please Enter valid password")
  }
  else{
    alert("Please Enter Valid Information");
  }
  
 
})