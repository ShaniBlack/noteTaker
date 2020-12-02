const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 8000;
const app = express();

// start at public folder
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function() {
console.log("Listening on port: " + PORT)
});
