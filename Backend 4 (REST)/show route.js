//index.js
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require("uuid");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//DATABASE
let posts = [
    {
        id: "1a",
        username : "apnacollege",
        content : "I love coding!"
    },
    {
        id: "2a",
        username : "shradhakhapra",
        content : "work hard!"
    },
    {
        id: "3d",
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
/********************************************************************/
//show.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post in Detail</title>
    <link rel = "stylesheet" href = "/style.css"/>

</head>
<body>
    <h2>Here is your post in detail</h2>
    <p>Post id: <%= post.id %></p>
    <div class="post">
        <h3 class="user">@<%= post.username %></h3>
        <h4 class="content"><%= post.content %></h4>
    </div>    
</body>
</html>
/***************************************************************/
//index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Posts</title>
    <link rel = "stylesheet" href = "/style.css"/>
</head>
<body>
    <h1>Quora Posts</h1>
    <% for(post of posts) { %>
    <div class = "post">
        <h3 class="user"> @<%= post.username %> </h3>
        <h4 class="content"> <%= post.content %> </h4>
         <!--create view in detail post button-->
         <a href = "http://localhost:8080/posts/<%= post.id %>">View post in detail</a>
    </div>
    <% } %>  
    
    <!--create new post button-->
    <a href = "http://localhost:8080/posts/new">Create New Post</a>
</body>
</html>
