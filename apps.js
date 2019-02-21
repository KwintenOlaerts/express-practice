var express=require("express");
var app=express();

app.get("/", function(req,res){
res.send("Hi there, welcome to my progress")
});

app.listen(process.env.port ||4000, function(){
    console.log("ge zijt goed bezig vent")
});

app.get("/speak/pig", function(req,res){
    res.send("The pig says: let's go")
})

app.get("/speak/cat", function(req,res){
    res.send("The cat says: your a pussy")
})

app.get("/speak/dog", function(req,res){
    res.send("The dog says: who let the dogs out")
})

app.get("*", function(req,res){
    res.send("Not all who wander are lost... but you are on the wrong page tho")
})