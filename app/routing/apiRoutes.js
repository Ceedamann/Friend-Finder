var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(rep, res){
        res.json(friends)
    })
    app.post("/api/friends", function(rep, res){

    })
}