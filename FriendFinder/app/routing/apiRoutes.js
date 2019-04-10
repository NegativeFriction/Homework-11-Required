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
    var q1 = responses[2];
    var q2 = responses[3];
    var q3 = responses[4];
    var q4 = responses[5];
    var q5 = responses[6];
    var q6 = responses[7];
    var q7 = responses[8];
    var q8 = responses[9];
    var q9 = responses[10];
    var q10 = responses[11];

    connection.query("select * from friends", function(err, response) {
      if (err) throw err;
      console.log(response);
      var lowestDiff = [50, -1];
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
      res.json(lowestDiff[1]);
    });
  });
};
//   app.get("/api/friend", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     } else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

// //   app.post("/api/clear", function(req, res) {
// //     // Empty out the arrays of data
// //     tableData.length = 0;
// //     waitListData.length = 0;

// //     res.json({ ok: true });
// //   });
