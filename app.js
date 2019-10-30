const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

// Faker npm
var faker = require('faker');


//routes
app.get("/", function(req, res) {
    res.render("index.ejs", {
        Title: "Malware",
        SubTitle: "Malware or Malicious Software",
        Image: faker.image.avatar(),
        Name: faker.name.findName(),
        PersonT: faker.name.title(),
        Country: faker.address.country(),
        City: faker.address.city(),
        Job: faker.name.jobType()
    });
});

app.get("/adware", function(req, res) {
    res.render("adware.ejs", {
        Title: "Malware: Adware",
        SubTitle: "Adware",
        Image: faker.image.avatar(),
        Name: faker.name.findName(),
        PersonT: faker.name.title(),
        Country: faker.address.country(),
        City: faker.address.city(),
        Job: faker.name.jobType()
    });
});

app.get("/ransom", function(req, res) {
    res.render("ransom.ejs", {
        Title: "Malware: Ransomware",
        SubTitle: "Ransomware",
        Image: faker.image.avatar(),
        Name: faker.name.findName(),
        PersonT: faker.name.title(),
        Country: faker.address.country(),
        City: faker.address.city(),
        Job: faker.name.jobType()
    });
});

app.get("/recent", function(req, res) {
    res.render("recent.ejs", {
        Title: "Recent News",
        SubTitleOne: "California City, Lodi: Ransomware Attack",
        SubTitleTwo: "Android Trojan: Joker",
        Image: faker.image.avatar(),
        Name: faker.name.findName(),
        PersonT: faker.name.title(),
        Country: faker.address.country(),
        City: faker.address.city(),
        Job: faker.name.jobType()
    });
});

// server listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express Server is Running...");
});