
let q1=document.querySelector(".Question1");
let q2=document.querySelector(".Question2");
let button=document.querySelector("button");
let result=document.querySelector(".result");

 button.onclick = function() {
let Q1=document.querySelector(".Question1").value;
let Q2=document.querySelector(".Question2").value;
    console.log(Q1);
    console.log(Q2);
     result.innerHTML = (Q1);
};
