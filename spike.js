var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User"),
    Thread = require("./models/Thread");


// Thread.findOne({}, function(err, thread){
//   console.log(thread);

// User.findById(thread.creator, function(err, user){
//     console.log(user);

//   });

// });

Thread.find({}).populate("creator").exec(function(err, thread){
  console.log(thread);
  mongoose.connection.close();
});


