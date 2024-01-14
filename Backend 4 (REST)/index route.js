//index.js
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

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

app.get("/posts", (req, res) => {
  //  res.send("post request working");
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});
/****************************************************************************/
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
        <h3 class="user"> @ <%= post.username %> </h3>
        <h4 class="content"> @ <%= post.content %> </h4>
    </div>
    <% } %>    
</body>
</html>
/***************************************************************************/
//style.css
h1{
    color: maroon;
}

.post{
    background-color: blanchedalmond;
}

.user{
    font-style: italic;
}
