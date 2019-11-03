var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

const connectpass = process.env.CONNECTPASS;

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;
    res.render("index", { burgers: data });
    // location.reload();
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  connection.query(
    "INSERT INTO burgers (burgerName) VALUES (?)",
    [req.body.burger],
    function(err, result) {
      if (err) throw err;

      res.redirect("/");
    }
  );
});

//Update burger to devoured
app.put("/api/:id", function(req, res) {
  connection.query(
    "UPDATE burgers SET devoured = true WHERE id = ?;",
    [req.params.id],
    function(err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
  console.log("we did it boys");
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
