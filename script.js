function emi(){

let p=document.getElementById("loan").value
let r=document.getElementById("rate").value/12/100
let n=document.getElementById("time").value

let e=(p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1)

document.getElementById("result").innerHTML="Monthly EMI: ₹ "+e.toFixed(2)

}
