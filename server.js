var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
const orm = require("./config/orm");

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

// Root get route
// orm.selectAll(burgers);
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;
    res.render("index", { burgers: data });
    // location.reload();
  });
});

// Post route -> back to home
// orm.newEntry(burgers, burgerName, req.body.burger);
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
// orm.updateEnry(burgers, devoured, true, req.params.id)
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
