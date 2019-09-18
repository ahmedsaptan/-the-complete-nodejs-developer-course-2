const path = require("path");
const express = require('express');
const hbs = require("hbs");



const app = express();


//express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars
app.set('view engine', 'hbs');
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


//setup static 
app.use(express.static(publicDirectoryPath));



app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App!",
        name: "ahmed"
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about me",
        name: "ahmed"
    })
});


app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "ahmed.sayed.fcis1997@gmail.com",
        title: "help",
        name: "ahmad"
    });
});

app.get("/weather", (req, res) => {
    res.send({
        location: "cairo",
        temp:32
    });
});

app.get('*', (req, res) => {
    res.send("My 404 Page");
});


app.listen(3000, () => {
    console.log("Server started at 3000");
})