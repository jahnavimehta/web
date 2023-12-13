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
    <p>This is a paragraph.</p>
    <div class="box"></div>
    <script src="app.js"></script>
</body>
</html>
/***************************************************************************/
//style.css file
.box {
    height: 150px;
    width: 150px;
    background-color: palevioletred;
    border: 1px black solid;
}
/****************************************************************************/
//app.js file
//event listner for para
let para = document.querySelector("p");

para.addEventListener("click", function(){
    console.log("the para was clicked.");
});

//event listner for div
//my code
let div = document.querySelector("div"); 

div.addEventListener("mouseenter", function(){
    console.log("mouse enetered box.");
});

//shraddha ma'am code
let box = document.querySelector(".box"); 

box.addEventListener("mouseenter", function(){
    console.log("mouse enetered box.");
});
