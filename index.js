const express = require("express");
const dotenv = require("dotenv");
const { globalMiddleware } = require("./middleware/middleware");
dotenv.config();
const port = process.env.PORT;
const app = express();

const route = require("./routes/route");

app.use(globalMiddleware);

app.use(route);

app.listen(port);
