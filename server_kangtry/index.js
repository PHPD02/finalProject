// 店家後臺的增刪修改
var express = require("express");
var cors = require("cors");
var app = express();
app.listen(8000);
app.use( express.static("public")  );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());

var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "finalproject"
});

conn.connect(function (err) {
    console.log(err);
})

app.get("/todo/list", function (req, res) {
    conn.query("select * from tablename", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})

app.get("/todo/item/:id", function (req, res) {
    conn.query("select * from tablename where Id = ?", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows[0]) );
        }
    )
})

app.post("/todo/create", function (req, res) {
     conn.query("INSERT INTO tablename (Id , Name , Description , Picture1) VALUES (?,?,?,?)", 
         [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
function (err, rows) {
            res.send( JSON.stringify( req.body ));
        }
    )

})

app.put("/todo/item", function (req, res) {
     conn.query("UPDATE tablename SET  Description = ? , Name =? , Picture1 =?  WHERE Id = ?", 
     [req.body.Description,req.body.Name,req.body.Picture1,req.body.Id],
        //  [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
function (err, rows) {
            res.send( JSON.stringify( req.body ));
        }
    )

})

app.delete("/todo/delete/:id", function (req, res) {
     conn.query("DELETE FROM tablename WHERE Id = ?",
         [req.params.id], 
function (err, rows) {
            res.send("#" + req.params.id + " deleted");
        }
    )
})
// 首頁用的餐廳列表
var restaurants = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "finalproject"
});
restaurants.connect(function (err) {
    console.log(err);
})
app.get("/restaurants/list", function (req, res) {
    restaurants.query("select * from restaurants", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/restaurants/list", function (req, res) {
    restaurants.query("select * from restaurants where Id = ?", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows[0]) );
        }
    )
})
// 餐廳評論
var restaurantcomment = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "finalproject"
});
restaurantcomment.connect(function (err) {
    console.log(err);
})
app.get("/restaurantcomment/list", function (req, res) {
    restaurantcomment.query("select * from restaurantcomment", [],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/restaurantcomment/list/:restaurant", function (req, res) {
    restaurantcomment.query("select * from restaurantcomment where restaurant = ?", 
        [req.params.restaurant],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.post("/restaurantcomment/create", function (req, res) {
    restaurantcomment.query("INSERT INTO restaurantcomment (commentId , restaurant , costomerName , date , comment , rating) VALUES (?,?,?,?,?,?)", 
        [req.body.commentId,req.body.restaurant,req.body.costomerName,req.body.date,req.body.comment,req.body.rating],
function (err, rows) {
           res.send( JSON.stringify( req.body ));
       }
   )

})