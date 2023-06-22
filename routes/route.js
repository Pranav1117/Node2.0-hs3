const route = require("express").Router();
const { loginApi, aboutApi, registerApi } = require("../controller/api");
const { authmiddleware } = require("../middleware/middleware");

route.get("/login", authmiddleware, loginApi);

route.get("/about", aboutApi);

route.get("/register", registerApi);

module.exports = route;
