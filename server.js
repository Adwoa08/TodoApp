var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api", expressJwt({secret: config.secret}));
app.use("/auth/change-password", expressJwt({secret: config.secret}));
app.use("/auth", require("./routes/authRoutes"));
app.use("/api/todo", require("./routes/todoRoutes"));

app.use(express.static(path.join(__dirname, "public")));



mongoose.connect(config.database, function(err){
    if(err) throw err;
    console.log("Successfully connected to the database");
})



app.listen(port, function(){
    console.log("Server is listening on port " + port);
});