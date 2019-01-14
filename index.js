let express         = require("express"),
    app             = express(),
    port            = process.env.PORT || 3000;


var mongoose = require("mongoose");
mongoose.connect("mongodb://admin:thienthuan1@ds155864.mlab.com:55864/testdict",{ useNewUrlParser: true });
var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});


Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("ALL THE CATS.....");
        console.log(cats);
    }
});


app.listen(port, function(err){
    if(err){
        console.log(`App error:${err}`)
    } else{
        console.log("App is running successfully on port:" + port)
    }
    
})