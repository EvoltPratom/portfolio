const express = require("express")
const bodyParser = require('body-parser'); 

app = express()
app.use(express.static("public"))
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(urlencodedParser)
app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.render("index.html")
})



app.listen(8000)
