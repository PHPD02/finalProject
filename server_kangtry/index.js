// const { query } = require("express");
// var express = require("express");
// var app = express();
// var mysql = require("mysql");
// var bodyParser = require("body-parser");
// var cors = require("cors");

// var db = mysql.createConnection({
//   //const db = mysql.createPool
//   user: "root",
//   password: "",
//   host: "localhost",
//   port: 3306,
//   database: "finalproject",
// });
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM tablename";
//   db.query(sqlSelect, (err, result) => {
//     // console.log(result)
//     res.send(result);
//   });
// });

// app.post("/api/insert", (req, res) => {
//   const Id = req.body.Id;
//   const Name = req.body.Name;
//   const Description = req.body.Description;
//   const Picture1 = req.body.Picture1;
//   const sqlInsert =
//     "INSERT INTO tablename (Id , Name , Description , Picture1) VALUES (?,?,?,?)";
//   db.query(sqlInsert, [Id, Name, Description, Picture1], (err, result) => {
//     console.log(result);
//   });
//   //     res.send("hihi");
// });

// app.put("/api/update", (req, res) => {
//   const Id = req.body.Id;
//   const Name = req.body.Name;
//   const Description = req.body.Description;
//   const Picture1 = req.body.Picture1;

//   db.query(
//     "UPDATE tablename SET Id=? Name=? Description=? Picture1=? WHERE Id=?",
//     [Id, Name, Description, Picture1],
//     (error, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
// app.delete("/delete/:id", (req, res) => {
//     const Id = req.params.Id;
//     db.query("DELETE FROM tablename WHERE Id = ?", Id, (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     });
//   });



// app.listen(8000, () => {
//   console.log("port 8000 is running");
// });



// var express = require("express");
// var cors = require("cors");
// var app = express();
// app.listen(8000);
// app.use( express.static("public")  );
// app.use( express.json() );
// app.use( express.urlencoded( {extended: true}) );
// app.use(cors());

// var mysql = require("mysql");
// var conn = mysql.createConnection({
//     user: "root",
//     password: "",
//     host: "localhost",
//     port: 3306,
//     database: "finalproject"
// });

// conn.connect(function (err) {
//     console.log(err);
// })

// app.get("/menu/list", function (req, res) {
//     conn.query("select * from tablename", [],
//         function (err, rows) {
//             res.send( JSON.stringify(rows) );
//         }
//     )
// })

// app.get("/menu/item/:id", function (req, res) {
//     conn.query("select * from tablename where Id = ?", 
//         [req.params.id],
//         function (err, rows) {
//             res.send( JSON.stringify(rows[0]) );
//         }
//     )
// })

// app.post("/menu/create", function (req, res) {
//     conn.query("INSERT INTO tablename (Id , Name , Description , Picture1) VALUES (?,?,?,?)", 
//         [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
//         function (err, rows) {
//             res.send( JSON.stringify( req.body ));
//         }
//     )

// })

// app.put("/menu/item", function (req, res) {
//     conn.query("update tablename set title= ?, isComplete = ? where todoTableId = ?", 
//         [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
//         function (err, rows) {
//             res.send( JSON.stringify( req.body ));
//         }
//     )

// })

// app.delete("/todo/delete/:id", function (req, res) {
//     conn.query("DELETE FROM tablename WHERE Id = ?",
//         [req.params.id], 
//         function (err, rows) {
//             res.send("#" + req.params.id + " deleted");
//         }
//     )
// })
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
     conn.query("update tablename set  Description = ? , Name =?  where Id = ?", 
         [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
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
