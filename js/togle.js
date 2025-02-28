document.getElementById("addmoney").style.display = "none";
document.getElementById("outmoney").style.display = "none";
document.getElementById("transfermoney").style.display = "none";
document.getElementById("bonus").style.display = "none";
document.getElementById("billpay").style.display = "none";
document.getElementById("transaction").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
    
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("default").style.display = "none";
    document.getElementById("outmoney").style.display = "none";
    document.getElementById("transfermoney").style.display = "none";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("billpay").style.display = "none";
    document.getElementById("transaction").style.display = "none";

})
document.getElementById("cashout-box").addEventListener("click", function () {
    
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("transfermoney").style.display = "none";
    document.getElementById("outmoney").style.display = "block";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("billpay").style.display = "none";
    document.getElementById("transaction").style.display = "none";

})
document.getElementById("transfer-box").addEventListener("click", function () {
    
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("transfermoney").style.display = "block";
    document.getElementById("outmoney").style.display = "none";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("billpay").style.display = "none";
    document.getElementById("transaction").style.display = "none";

})
document.getElementById("bonus-box").addEventListener("click", function () {
    
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("transfermoney").style.display = "none";
    document.getElementById("outmoney").style.display = "none";
    document.getElementById("bonus").style.display = "block";
    document.getElementById("billpay").style.display = "none";
    document.getElementById("transaction").style.display = "none";

})
document.getElementById("bill-box").addEventListener("click", function () {
    
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("transfermoney").style.display = "none";
    document.getElementById("outmoney").style.display = "none";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("transaction").style.display = "none";
    document.getElementById("billpay").style.display = "block";

})
document.getElementById("transc-box").addEventListener("click", function () {
    
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("default").style.display = "none";
    document.getElementById("transfermoney").style.display = "none";
    document.getElementById("outmoney").style.display = "none";
    document.getElementById("bonus").style.display = "none";
    document.getElementById("transaction").style.display = "block";
    document.getElementById("billpay").style.display = "none";

})