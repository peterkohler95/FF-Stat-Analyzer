var cheerio = require("cheerio");
var request = require("request");


request("http://games.espn.com/ffl/leaders?slotCategoryId=2", function (error, response, html) {
    var $ = cheerio.load(html);
    var actualPTS = [];

    $("tr.pncPlayerRow").each(function (i, element) {
        var player = $(element).find("td.playertablePlayerName").children().text();
        var PTS = $(element).find("td.appliedPoints").text();
        actualPTS.push({
            player: player,
            PTS: PTS
        });
    });
    console.log("2018 Actual PTS")
    console.log(actualPTS);
});
