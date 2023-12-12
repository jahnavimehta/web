//limitation of onclick/onmouseenter
let btns = document.querySelectorAll("button");

for(btn of btns){
  btn.onClick = sayHello;
  btn.onClick = sayName;
}

function sayHello(){
  alert("hello!");
}

function sayName(){
  alert("apna college!");
}
/******************************************************/
