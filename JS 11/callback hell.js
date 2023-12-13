 let h = document.querySelector("h1");

 //after 2s
 setTimeout(() => {
    h.style.color = "red";
 }, 2000);

 //after 3s
 setTimeout(() => {
    h.style.color = "green";
 }, 3000);

  //after 4s
  setTimeout(() => {
    h.style.color = "yellow";
 }, 4000);
/**********************************************************/
//fails to work asynhronously - function changes color immediately
 let h = document.querySelector("h1");

 function changeColor(color){
    h.style.color = color;
 }

 //after 2s
 setTimeout(changeColor("green"), 2000);

 //after 3s
 setTimeout(changeColor("red"), 3000);

  //after 4s
  setTimeout(changeColor("yellow"), 4000);
