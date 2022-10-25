const express = require("express");
const dotenv = require("dotenv");
const { routes } = require("./src/routes");
const bodyParser = require('body-parser');

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use("/api", routes);


app.listen(process.env.PORT, ()=>{
    console.log("Server running at ", process.env.PORT);
})