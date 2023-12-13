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
/**************************************************************/
//code works - without any callbacks used, doesn't manage dependency of calls on each other
 let h = document.querySelector("h1");

 function changeColor(color, delay){
    setTimeout(() => {
        h.style.color = color;        
    }, delay);
 }

 //after 2s
changeColor("green", 2000);

 //after 3s
changeColor("red", 3000);

  //after 4s
changeColor("yellow", 4000);
/***************************************************************/
//code works - using callbacks, manages dependecy of calls on each other
 let h = document.querySelector("h1");

 function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h.style.color = color;    
        if(nextColorChange) nextColorChange();    
    }, delay);
 }

changeColor("green", 2000, () => {
    changeColor("red", 3000, () => {
        changeColor("yellow", 4000);
    });
});


