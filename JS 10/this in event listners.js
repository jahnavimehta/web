//index.html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <h1>this is the h1 heading</h1>
    <h3>this is the h3 heading</h3>
    <p>this is a sample paragraph.</p>
    <btn>click me!</btn>
    <script src="app.js"></script>
</body>
</html>
/************************************************************************************/
//app.js file
let btn = document.querySelector("btn");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
    console.log("the element was clicked!");
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
