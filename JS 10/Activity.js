//app.js file
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let randomColor = getRandomColor();
    
    //h3
    let h3 = document.querySelector("h3");
    h3.innerText = randomColor;

    //div 
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r}, ${y}, ${b})`; //color = rgb(0, 0, 0)
    return color;
}

/***************************************************************************************/
//index.html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <h3>Generate a random color</h3>
    <br />
    <button>Generate color</button>
    <br />
    <br />
    <div>This is your new color</div>
    <script src="app.js"></script>
</body>
</html>
/***************************************************************************************/
//style.css file
body {
    text-align: center;
}

div {
    height: 100px;
    width: 500px;
    border: 1px solid black;
    margin: auto;
}
