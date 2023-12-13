//synchronous nature
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);

/****************************************************/
//asynchronous nature
setTimeout(() => {
  console.log("apna college");
}, 2000);

setTimeout(() => {
  console.log("hello world");
}, 2000);

console.log("hello...");
