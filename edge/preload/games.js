// var requestAmount = 15
//
// var loc = window.location.pathname;
// if(loc == "/games" || loc == "/games/"){
//     var sort1Data = [];
//     var sort1Requests = 0;
//     var requests1 = {i:0}
//     $.getJSON("https://www.roblox.com/games/list-json?sortFilter=1&StartRows=0&MaxRows="+requestAmount, function( data ) {
//         for (i = 0; i < data.length; i++) {
//             (function(i) {
//                 $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall?page=0", function( fabData ) {
//                     sort1Data.push({
//                         "location" : i,
//                         "criticScore" : fabData.CriticScore,
//                         "criticColor" : ScoreColor(fabData.CriticScore)
//                     });
//                     sort1Requests++;
//                     requests1.i = sort1Requests;
//                 }).fail(function() {
//                     sort1Data.push({
//                         "location" : i,
//                         "criticScore" : "--",
//                         "criticColor" : "#9e9e9e"
//                     });
//                     sort1Requests++;
//                     requests1.i = sort1Requests;
//                 });
//             })(i);
//         }
//     });
//
//     var sort8Data = [];
//     var sort8Requests = 0;
//     var requests8 = {i:0}
//     $.getJSON("https://www.roblox.com/games/list-json?sortFilter=8&StartRows=0&MaxRows="+requestAmount, function( data ) {
//         for (i = 0; i < data.length; i++) {
//             (function(i) {
//                 $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall?page=0", function( fabData ) {
//                     sort8Data.push({
//                         "location" : i,
//                         "criticScore" : fabData.CriticScore,
//                         "criticColor" : ScoreColor(fabData.CriticScore)
//                     });
//                     sort8Requests++;
//                     requests8.i = sort8Requests;
//                 }).fail(function() {
//                     sort8Data.push({
//                         "location" : i,
//                         "criticScore" : "--",
//                         "criticColor" : "#9e9e9e"
//                     });
//                     sort8Requests++;
//                     requests8.i = sort8Requests;
//                 });
//             })(i);
//         }
//     });
//
//
//     var sort11Data = [];
//     var sort11Requests = 0;
//     var requests11 = {i:0}
//     $.getJSON("https://www.roblox.com/games/list-json?sortFilter=11&StartRows=0&MaxRows="+requestAmount, function( data ) {
//         for (i = 0; i < data.length; i++) {
//             (function(i) {
//                 $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall?page=0", function( fabData ) {
//                     sort11Data.push({
//                         "location" : i,
//                         "criticScore" : fabData.CriticScore,
//                         "criticColor" : ScoreColor(fabData.CriticScore)
//                     });
//                     sort11Requests++;
//                     requests11.i = sort11Requests;
//                 }).fail(function() {
//                     sort11Data.push({
//                         "location" : i,
//                         "criticScore" : "--",
//                         "criticColor" : "#9e9e9e"
//                     });
//                     sort11Requests++;
//                     requests11.i = sort11Requests;
//                 });
//             })(i);
//         }
//     });
// }
