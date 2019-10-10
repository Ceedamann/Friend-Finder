var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })
    app.post("/api/friends", function (req, res) {
        var total = 0;
        var userData = req.body;
        var scores = userData.userScores;

        var newFr = {
            name: "",
            photo: "",
            friends: 55
        };

        var scored = scores.map(function (item) {
            return parseInt(item, 10);
        });

        userData = {
            name: req.body.name,
            photo: req.body.image,
            scores: scored
        };

        var sum = scored.reduce((a, b) => a + b, 0);


        for (let c = 0; c < friends.length; c++) {

            total = 0;
            var bfr = friends[c].scores.reduce((a, b) => a + b, 0);
            total += Math.abs(sum - bfr)
            if (total <= newFr.friends) {
                newFr.name = friends[c].name;
                newFr.photo = friends[c].photo;
                newFr.friends = total;
            }

        }
        friends.push(userData);
        res.json(newFr);
    })
}