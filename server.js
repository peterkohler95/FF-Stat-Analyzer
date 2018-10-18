var cheerio = require("cheerio");
var request = require("request");

request("http://games.espn.com/ffl/tools/projections?leagueId=1133167&seasonTotals=true&seasonId=2018&slotCategoryId=2", function (error, response, html) {
    var $ = cheerio.load(html);
    var projectedPTS = [];
    $("tr.pncPlayerRow").each(function (i, element) {
        var player = $(element).find("td.playertablePlayerName").children().text();
        var PTS = $(element).find("td.appliedPoints").text();
        projectedPTS.push({
            player: player,
            PTS: PTS
        });
    });
    console.log("2018 Projected PTS")
    console.log(projectedPTS);
});


