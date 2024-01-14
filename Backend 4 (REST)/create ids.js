//index.js
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require("uuid"); //added


app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//DATABASE
let posts = [
    {
        id: uuidv4(), //added
        username : "apnacollege",
        content : "I love coding!"
    },
    {
        id: uuidv4(),
        username : "shradhakhapra",
        content : "work hard!"
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();   //added
    posts.push({id, username, content});    //added
   // res.send("post request working");
   res.redirect("/posts");
});

//SHOW ROUTE
app.get("/posts/:id", (req, res) => {
    let{ id } = req.params;
    //console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    //res.send("request working");
    res.render("show.ejs", {post});
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});
