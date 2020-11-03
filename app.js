const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/utils/database");
const studentRoutes = require("./src/routes/student");
const app = express();

const Student = require("./src/models/student");


app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(studentRoutes);

sequelize
    .sync()
    .then(result => {
        return Student.findByPk(1);
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000);  