var requestAmount = 6;

var loc = window.location.pathname;

var sort6Data = [];
var sort6Requests = 0;
var requests6 = {i:0}
$.getJSON("https://www.roblox.com/games/list-json?sortFilter=6&StartRows=0&MaxRows="+requestAmount, function( data ) {
    for (i = 0; i < data.length; i++) {
        (function(i) {
            $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall", function( fabData ) {
              if(fabData.CriticCount >= 3){
                sort6Data.push({
                    "location" : i,
                    "criticScore" : fabData.CriticScore,
                    "criticColor" : ScoreColor(fabData.CriticScore)
                });
              }else{
                sort6Data.push({
                    "location" : i,
                    "criticScore" : "--",
                    "criticColor" : "#9e9e9e"
                });
              }
                sort6Requests++;
                requests6.i = sort6Requests;
            }).fail(function() {
                sort6Data.push({
                    "location" : i,
                    "criticScore" : "--",
                    "criticColor" : "#9e9e9e"
                });
                sort6Requests++;
                requests6.i = sort6Requests;
            });
        })(i);
    }
});

var sort5Data = [];
var sort5Requests = 0;
var requests5 = {i:0}
$.getJSON("https://www.roblox.com/games/list-json?sortFilter=5&StartRows=0&MaxRows="+requestAmount, function( data ) {
    for (i = 0; i < data.length; i++) {
        (function(i) {
            $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall", function( fabData ) {
              if(fabData.CriticCount >= 3){
                sort5Data.push({
                    "location" : i,
                    "criticScore" : fabData.CriticScore,
                    "criticColor" : ScoreColor(fabData.CriticScore)
                });
              }else{
                sort5Data.push({
                    "location" : i,
                    "criticScore" : "--",
                    "criticColor" : "#9e9e9e"
                });
              }
                sort5Requests++;
                requests5.i = sort5Requests;
            }).fail(function() {
                sort5Data.push({
                    "location" : i,
                    "criticScore" : "--",
                    "criticColor" : "#9e9e9e"
                });
                sort5Requests++;
                requests5.i = sort5Requests;
            });
        })(i);
    }
});


var sort17Data = [];
var sort17Requests = 0;
var requests17 = {i:0}
$.getJSON("https://www.roblox.com/games/list-json?sortFilter=17&StartRows=0&MaxRows="+requestAmount, function( data ) {
    for (i = 0; i < data.length; i++) {
        (function(i) {
            $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall", function( fabData ) {
              if(fabData.CriticCount >= 3){
                sort17Data.push({
                    "location" : i,
                    "criticScore" : fabData.CriticScore,
                    "criticColor" : ScoreColor(fabData.CriticScore)
                });
              }else{
                sort17Data.push({
                    "location" : i,
                    "criticScore" : "--",
                    "criticColor" : "#9e9e9e"
                });
              }
                sort17Requests++;
                requests17.i = sort17Requests;
            }).fail(function() {
                sort17Data.push({
                    "location" : i,
                    "criticScore" : "--",
                    "criticColor" : "#9e9e9e"
                });
                sort17Requests++;
                requests17.i = sort17Requests;
            });
        })(i);
    }
});
