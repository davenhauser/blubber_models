var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app")

//SCHEMA

var userSchema = new mongoose.Schema({
  name:     {type: String, required: true},
  email:    {type: String, required: true},
  //pasword: String,
  moderator: {type: Boolean, default: false}
});

//MODEL
var User = mongoose.model("User", userSchema)

User.remove({},function(err, results){
  if(err) console.log(err);
  console.log("Creating Users")
});

  User.create([
    {name: "John Marshall", email: "jm@us.com", moderator: true},
    {name: "Oliver Wendell Holmes Jr.", email: "owh@us.com", moderator: false},
    {name: "Thurgood Marshall", email: "tm@us.com", moderator: false},
    {name: "Sandra Day O'Connor", email: "sdc@us.com", moderator: false}
    ], function(err,results) {
      if (err) console.log(err);
      console.log(results);
      mongoose.connection.close();
       });






