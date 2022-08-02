const express = require ('express');
const routes = require('./app/routes/route'); // import the routes
const app = express();
const cors = require("cors");

var urlAPI = "http://localhost:4200"
//var urlAPI = "http://192.168.12.236"
var corsOptions = {
    origin: urlAPI   
};

var APIurl = urlAPI == "http://localhost:4200" ? "/" : "/dashboard_sg_api"
var APIport = urlAPI == "http://localhost:4200" ? "3000" : "91"

app.use(cors(corsOptions));

app.use(express.json());
app.use(APIurl, routes); //to use the routes

const listener = app.listen(process.env.PORT || APIport, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})