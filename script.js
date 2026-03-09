function calculateEMI(){

let P=parseFloat(document.getElementById("amount").value);
let annualRate=parseFloat(document.getElementById("rate").value);
let N=parseInt(document.getElementById("months").value);

let R=annualRate/12/100;

let EMI=(P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);

let totalPayment=EMI*N;
let totalInterest=totalPayment-P;

document.getElementById("result").innerHTML=

"Monthly EMI: ₹"+EMI.toFixed(2)+"<br>"+
"Total Interest: ₹"+totalInterest.toFixed(2)+"<br>"+
"Total Payment: ₹"+totalPayment.toFixed(2);

}
