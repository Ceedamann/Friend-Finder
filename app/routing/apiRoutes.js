var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        var total = 0;
        var userData = req.body;
        var userName = userData.userName
        var scores = userData.userScores;
        //    totalScore = [];

        var newFr = {
            name: "",
            photo: "",
            friends: 55
        };
        var z = scores.map(function(item){
            return parseInt(item, 10);
        });

        userData = {
            name:req.body.name,
            photo: req.body.image,
            scores: z
        };
        //    for (let i = 0; i < scores.length; i++) {
        //        totalScore.push(parseInt(scores[i]));
        //    }
        var sum = z.reduce((a,b)=>a+b, 0);

        //    console.log(totalScore);
           for (let j = 0; j < friends.length; j++) {

            total= 0;
            var bfr =friends[j].scores.reduce((a,b)=> a+b, 0);
            total += Math.abs(sum - bfr)
            if(total<= newFr.friends){
                newFr.name = friends[j].name;
                newFr.photo = friends[j].photo;
                newFr.friends = total;
            }
        //     //    console.log(friends[j].name, friends[j].scores)
        //        var totalDifference = totalScore.map(
        //            function(a, i) {
        //                 return Math.abs(a - parseInt(friends[j].scores));
        //                });
        //        console.log(`${friends[j].name}'s total diff from you is is ${totalDifference.reduce((a,b) => a + b, 0)}`);
           }
           friends.push(userData);
           res.json(newFr);
    })
}