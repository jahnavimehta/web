//INDEX.JS
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//DATABASE
let posts = [
    {
        username : "apnacollege",
        content : "I love coding!"
    },
    {
        username : "shradhakhapra",
        content : "work hard!"
    },
    {
        username : "ben",
        content : "go all in!"
    },
];

//INDEX ROUTE
app.get("/posts", (req, res) => {
  //  res.send("post request working");
  res.render("index.ejs", { posts });
});

//CREATE ROUTE
app.get("/posts/new", (req, res) =>{
    res.render("new.ejs");
})

//NEW ROUTE
app.post("/posts", (req, res) => {
    // console.log(req.body);
    // res.send("post request working");
    let{ username, content } = req.body;
    posts.push({username, content});
    res.send("post request working");
});


app.listen(port, () => {
    console.log("listening to port : 8080");
});
/****************************************************************************/
//new.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create New Post</title>
</head>
<body>
    <form method="post" action="/posts">
        <input placeholder = "enter username" name="username" /> <br />
        <textarea placeholder = "write your post" name = "content"></textarea> <br />
        <button>Submit Post</button>
    </form>    
</body>
</html>
