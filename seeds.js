var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User"),
    Thread = require("./models/Thread");

Thread.remove({}, function(err,results){
  User.remove({}, function(err, results) {
    User.create([
        {name: "John Marshall",             email: "jm@us.courts.gov",   moderator: true},
        {name: "Oliver Wendell Holmes Jr.", email: "owh2@us.courts.gov"},
        {name: "Thurgood Marshall",         email: "tm@us.courts.gov"},
        {name: "Sandra Day O'Connor",       email: "sdo@us.courts.gov"}
      ], function(err, users) {
        if (err) console.log(err);

        // console.log(users);

        var john = users[0];
        var thur = users[2];
        //create threads
        Thread.create([
          {name: "YOLO",
          creator: john,
          creatorName: john.name },
          {name: "Think different",
          creator: thur,
          creatorName: thur.name}
          ],
          function(err, results){
            if (err) console.log(err);
            console.log(results);

            mongoose.connection.close();
        });
    });
  });

});




