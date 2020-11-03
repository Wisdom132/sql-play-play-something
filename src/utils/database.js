const Sequelize = require("sequelize");

const sequelize = new Sequelize("school", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;