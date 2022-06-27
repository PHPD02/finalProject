const { query } = require("express");
var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");
var cors = require('cors');


var db = mysql.createConnection({
    //const db = mysql.createPool
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "finalproject"
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req, res) => {

    const sqlSelect = "SELECT * FROM tablename";
    db.query(sqlSelect,(err,result)=>{
        // console.log(result)
        res.send(result)
    });
  });

app.post("/api/insert",(req,res)=>{
    const Id = req.body.Id
    const Name = req.body.Name
    const sqlInsert = "INSERT INTO tablename (Id , Name) VALUES (?,?)";
    db.query(sqlInsert,[Id, Name],(err,result)=>{
        console.log(result)
    });
        //     res.send("hihi");
})


app.listen(8000, () => {
  console.log("port 8000 is running");
});

