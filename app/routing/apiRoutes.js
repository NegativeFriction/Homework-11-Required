module.exports = function(app) {
  var mysql = require("mysql");

  var connection;
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    var connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "friendsDB"
    });
  }

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
  });
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.post("/api/new", function(req, res) {
    console.log("Argument received:", req.body.responses[0]);
    var responses = req.body.responses;
    var name = responses[0];
    var picture = responses[1];
    var q1 = parseInt(responses[2]);
    var q2 = parseInt(responses[3]);
    var q3 = parseInt(responses[4]);
    var q4 = parseInt(responses[5]);
    var q5 = parseInt(responses[6]);
    var q6 = parseInt(responses[7]);
    var q7 = parseInt(responses[8]);
    var q8 = parseInt(responses[9]);
    var q9 = parseInt(responses[10]);
    var q10 = parseInt(responses[11]);

    connection.query("select * from friends", function(err, response) {
      if (err) throw err;
      console.log(response);
      var lowestDiff = [50, 0];
      response.forEach(friend => {
        var localDifference = 0;
        localDifference += Math.abs(parseInt(friend.q1) - parseInt(q1));
        localDifference += Math.abs(parseInt(friend.q2) - parseInt(q2));
        localDifference += Math.abs(parseInt(friend.q3) - parseInt(q3));
        localDifference += Math.abs(parseInt(friend.q4) - parseInt(q4));
        localDifference += Math.abs(parseInt(friend.q5) - parseInt(q5));
        localDifference += Math.abs(parseInt(friend.q6) - parseInt(q6));
        localDifference += Math.abs(parseInt(friend.q7) - parseInt(q7));
        localDifference += Math.abs(parseInt(friend.q8) - parseInt(q8));
        localDifference += Math.abs(parseInt(friend.q9) - parseInt(q9));
        localDifference += Math.abs(parseInt(friend.q10) - parseInt(q10));
        if (localDifference < lowestDiff[0]) {
          lowestDiff = [localDifference, friend];
        }
      });
      connection.query(
        "insert into friends (name, picture, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) values(?,?,?,?,?,?,?,?,?,?,?,?)",
        [name, picture, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
        function(err, response) {
          if (err) throw err;
        }
      );
      res.json(lowestDiff[1]);
    });
  });
};
