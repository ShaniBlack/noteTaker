const express = require("express");
const fs = require("fs");

const port = process.env.port || 3000;
const app = express();

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(PORT, function() {
console.log("Listening on port: " + PORT)
});

// app.get("/api/notes", function(req, res) {
    
// })