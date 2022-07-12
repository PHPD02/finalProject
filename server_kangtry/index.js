// 店家後臺的增刪修改
var express = require("express");
var cors = require("cors");
var app = express();
app.listen(8000);
app.use( express.static("public")  );
app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );
app.use(cors());

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

// app.get("/todo/list", function (req, res) {
//     conn.query("select * from tablename", [],
//         function (err, rows) {
//             res.send( JSON.stringify(rows) );
//         }
//     )
// })

// app.get("/todo/item/:id", function (req, res) {
//     conn.query("select * from tablename where Id = ?", 
//         [req.params.id],
//         function (err, rows) {
//             res.send( JSON.stringify(rows[0]) );
//         }
//     )
// })

// app.post("/todo/create", function (req, res) {
//      conn.query("INSERT INTO tablename (Id , Name , Description , Picture1) VALUES (?,?,?,?)", 
//          [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
// function (err, rows) {
//             res.send( JSON.stringify( req.body ));
//         }
//     )

// })

// app.put("/todo/item", function (req, res) {
//      conn.query("UPDATE tablename SET  Description = ? , Name =? , Picture1 =?  WHERE Id = ?", 
//      [req.body.Description,req.body.Name,req.body.Picture1,req.body.Id],
//         //  [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
// function (err, rows) {
//             res.send( JSON.stringify( req.body ));
//         }
//     )

// })

// app.delete("/todo/delete/:id", function (req, res) {
//      conn.query("DELETE FROM tablename WHERE Id = ?",
//          [req.params.id], 
// function (err, rows) {
//             res.send("#" + req.params.id + " deleted");
//         }
//     )
// })


// 更新後的menu

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
    conn.query("select * from menu where restaurantName = '水項茶弄(台中中清店)'",
    [req.body.menuItemId,req.body.restaurantName,req.body.dish,req.body.type,req.body.introduce,req.body.picture,req.body.cost],
    function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
// 因為我們不是一間店一張表，各自進入店家修改商品，丟回資料庫，但我們撈的時候有指定選擇範圍，因此要在表單加入範圍

app.get("/todo/item/:menuItemId", function (req, res) {
    conn.query("select * from menu where menuItemId = ?", 
        [req.params.menuItemId],
        function (err, rows) {
            res.send( JSON.stringify(rows[0]) );
        }
    )
})

app.post("/todo/create", function (req, res) {
     conn.query("INSERT INTO menu (dish , introduce , picture , cost , restaurantName ) VALUES (?,?,?,?,?)", 
         [req.body.dish,req.body.introduce,req.body.picture,req.body.cost,req.body.restaurantName],
function (err, rows) {
            res.send( JSON.stringify( req.body ));
        }
    )

})

app.put("/todo/item", function (req, res) {
     conn.query("UPDATE menu SET  dish = ? , type =? , introduce =? , picture =? , cost =?  WHERE menuItemId = ?", 
     [req.body.dish,req.body.type,req.body.introduce,req.body.picture,req.body.cost,req.body.menuItemId],
        //  [req.body.Id,req.body.Name,req.body.Description,req.body.Picture1],
function (err, rows) {
            res.send( JSON.stringify( req.body ));
        }
    )

})

app.delete("/todo/delete/:menuItemId", function (req, res) {
     conn.query("DELETE FROM menu WHERE menuItemId = ?",
         [req.params.menuItemId], 
function (err, rows) {
            res.send("#" + req.params.menuItemId + " deleted");
        }
    )
})



// 
// 首頁用的餐廳列表
// var restaurants = mysql.createConnection({
//     user: "root",
//     password: "",
//     host: "localhost",
//     port: 3306,
//     database: "finalproject"
// });
// restaurants.connect(function (err) {
//     console.log(err);
// })
// app.get("/restaurants/list", function (req, res) {
//     restaurants.query("select * from restaurants", [],
//         function (err, rows) {
//             res.send( JSON.stringify(rows) );
//         }
//     )
// })
// app.get("/restaurants/list", function (req, res) {
//     restaurants.query("select * from restaurants where Id = ?", 
//         [req.params.id],
//         function (err, rows) {
//             res.send( JSON.stringify(rows[0]) );
//         }
//     )
// })
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

// 新首頁用的餐廳列表(分類)
var restaurant_catrgory = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "finalproject"
});
restaurant_catrgory.connect(function (err) {
    console.log(err);
})
app.get("/restaurants/category/all", function (req, res) {
    restaurant_catrgory.query("select * from restaurant where town = '北區' or town = '西屯區' LIMIT 60", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/restaurants/category/drinks", function (req, res) {
    restaurant_catrgory.query("select * from restaurant where category = '飲料' LIMIT 100", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
            // res.send( JSON.stringify(rows[10]) );
// 如果我要第幾個到到幾個怎麼寫比較好
        }
    )
})
app.get("/restaurants/category/chinese", function (req, res) {
    restaurant_catrgory.query("select * from restaurant where category = '中式' LIMIT 20", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/restaurants/category/west", function (req, res) {
    restaurant_catrgory.query("select * from restaurant where category = '西式' LIMIT 20", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/restaurants/category/southeast", function (req, res) {
    restaurant_catrgory.query("select * from restaurant where category = '東南亞' LIMIT 20", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/restaurants/category/aroundme", function (req, res) {
    restaurant_catrgory.query("select * from restaurant where town = '南屯區' LIMIT 60", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})
app.get("/restaurants/category/hito", function (req, res) {
    restaurant_catrgory.query("select * from restaurant where region = '臺中市' LIMIT 40", 
        [req.params.id],
        function (err, rows) {
            res.send( JSON.stringify(rows) );
        }
    )
})

