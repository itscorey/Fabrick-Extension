var requestAmount = 15

var loc = window.location.pathname;
if(loc == "/games" || loc == "/games/"){
    var sort1Data = [];
    var sort1Requests = 0;
    var requests1 = {i:0}
    $.getJSON("https://www.roblox.com/games/list-json?sortFilter=1&StartRows=0&MaxRows="+requestAmount, function( data ) {
        for (i = 0; i < data.length; i++) {
            (function(i) {
                $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall?page=0", function( fabData ) {
                  if(fabData.CriticCount >= 5){
                    sort1Data.push({
                        "location" : i,
                        "criticScore" : fabData.CriticScore,
                        "criticColor" : ScoreColor(fabData.CriticScore)
                    });
                  }else{
                    sort1Data.push({
                        "location" : i,
                        "criticScore" : "--",
                        "criticColor" : "#9e9e9e"
                    });
                  }
                    sort1Requests++;
                    requests1.i = sort1Requests;
                }).fail(function() {
                    sort1Data.push({
                        "location" : i,
                        "criticScore" : "--",
                        "criticColor" : "#9e9e9e"
                    });
                    sort1Requests++;
                    requests1.i = sort1Requests;
                });
            })(i);
        }
    });

    var sort8Data = [];
    var sort8Requests = 0;
    var requests8 = {i:0}
    $.getJSON("https://www.roblox.com/games/list-json?sortFilter=8&StartRows=0&MaxRows="+requestAmount, function( data ) {
        for (i = 0; i < data.length; i++) {
            (function(i) {
                $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall?page=0", function( fabData ) {
                  if(fabData.CriticCount >= 5){
                    sort8Data.push({
                        "location" : i,
                        "criticScore" : fabData.CriticScore,
                        "criticColor" : ScoreColor(fabData.CriticScore)
                    });
                  }else{
                    sort8Data.push({
                        "location" : i,
                        "criticScore" : "--",
                        "criticColor" : "#9e9e9e"
                    });
                  }
                    sort8Requests++;
                    requests8.i = sort8Requests;
                }).fail(function() {
                    sort8Data.push({
                        "location" : i,
                        "criticScore" : "--",
                        "criticColor" : "#9e9e9e"
                    });
                    sort8Requests++;
                    requests8.i = sort8Requests;
                });
            })(i);
        }
    });


    var sort11Data = [];
    var sort11Requests = 0;
    var requests11 = {i:0}
    $.getJSON("https://www.roblox.com/games/list-json?sortFilter=11&StartRows=0&MaxRows="+requestAmount, function( data ) {
        for (i = 0; i < data.length; i++) {
            (function(i) {
                $.getJSON("https://fabrick.me/game_data/"+data[i].PlaceID+"/overall?page=0", function( fabData ) {
                  if(fabData.CriticCount >= 5){
                    sort11Data.push({
                        "location" : i,
                        "criticScore" : fabData.CriticScore,
                        "criticColor" : ScoreColor(fabData.CriticScore)
                    });
                  }else{
                    sort11Data.push({
                        "location" : i,
                        "criticScore" : "--",
                        "criticColor" : "#9e9e9e"
                    });
                  }
                    sort11Requests++;
                    requests11.i = sort11Requests;
                }).fail(function() {
                    sort11Data.push({
                        "location" : i,
                        "criticScore" : "--",
                        "criticColor" : "#9e9e9e"
                    });
                    sort11Requests++;
                    requests11.i = sort11Requests;
                });
            })(i);
        }
    });
}

if(loc == "/games" || loc == "/games/"){
    // $.getJSON( "https://fabrick.me/top_rated?type=critic", function( data ) {
    //   var div1 = $("<div>").attr({"class": "games-list-container container-12 overflow-hidden", "id": "GamesListContainer12"}).insertAfter("#GamesListContainer1");
    //   var div2 = $("<div>").attr({"class": "container-header games-filter-changer"}).appendTo(div1);
    //   var h3 = $("<h3>").text("Fabrick - Critic Top Rated").appendTo(div2);
    //   var div3 = $("<div>").attr({"class": "games-list rows-12"}).appendTo(div2);
    //   var div4 = $("<div>").attr({"class": "show-in-multiview-mode-only"}).appendTo(div3);
    //   var div5 = $("<div>").attr({"class": "horizontally-scrollable"}).appendTo(div4);
    //
    //   var ul1 = $("<ul>").attr({"class": "hlist games game-cards"}).appendTo(div5);
    //   var div8 = $("<div>").attr({"class": "abp-spacer"}).appendTo(ul1);
    //   var div9 = $("<div>").attr({"class": "hidden-item hidden", "id": "keyword"}).appendTo(ul1);
    //
    //   //var div6 = $("<div>").attr({"class": "scroller prev disabled"}).appendTo(div4);
    //   //var div7 = $("<div>").attr({"class": "scroller next"}).appendTo(div4);
    //   var ul = $("<ul>").attr({"class": "hlist games game-cards game-cards-grid"}).appendTo(div3);
    //   for (i = 0; i < data.length; i++) {
    //     var list = $("<li>").attr({"class": "list-item game-card"}).appendTo(ul1);
    //     var container = $("<div>").attr({"class": "game-card-container"}).appendTo(list);
    //     var link = $("<a>").attr({"href": "https://www.roblox.com/games/" + data[i].assetId + "/game", "class": "game-card-link"}).appendTo(container);
    //     var thumbnail = $("<div>").attr({"class": "game-card-thumb-container"}).appendTo(link);
    //     var image = $("<img>").attr({"src": data[i].image, "class": "game-card-thumb"}).appendTo(thumbnail);
    //     var text = $("<div>").attr({"class": "text-overflow game-card-name"}).text(data[i].name).appendTo(link);
    //     var playing = $("<div>").attr({"class": "game-card-name-secondary"}).text(addCommas(data[i].players) + " Playing").appendTo(link);
    //
    //     var footer = $("<div>").attr({"class": "game-card-footer"}).appendTo(container);
    //     var creator = $("<div>").attr({"class": "creator"}).appendTo(footer);
    //     var by = $("<span>").attr({"class": "text-label xsmall"}).text("By ").appendTo(creator);
    //     var name = $("<a>").attr({"href": data[i].creatorUrl, "class": "text-link xsmall text-overflow"}).text(data[i].creator).insertAfter(by);
    //     var scoreDiv = $("<div>").attr({"class": "score-icon"}).css("background-color", ScoreColor(data[i].score*100)).text(Math.floor(data[i].score*100)).insertAfter(creator);
    //   }
    //
    // });

    $.getJSON( "https://fabrick.me/top_rated?type=user", function( data ) {
      var div1 = $("<div>").attr({"class": "games-list-container container-16 overflow-hidden", "id": "GamesListContainer16"}).insertAfter("#GamesListContainer1");
      var div2 = $("<div>").attr({"class": "container-header games-filter-changer"}).appendTo(div1);
      var h3 = $("<h3>").text("Fabrick - User Top Rated").appendTo(div2);
      var div3 = $("<div>").attr({"class": "games-list rows-16"}).appendTo(div2);
      var div4 = $("<div>").attr({"class": "show-in-multiview-mode-only"}).appendTo(div3);
      var div5 = $("<div>").attr({"class": "horizontally-scrollable"}).appendTo(div4);

      var ul1 = $("<ul>").attr({"class": "hlist games game-cards"}).appendTo(div5);
      var div8 = $("<div>").attr({"class": "abp-spacer"}).appendTo(ul1);
      var div9 = $("<div>").attr({"class": "hidden-item hidden", "id": "keyword"}).appendTo(ul1);

      //var div6 = $("<div>").attr({"class": "scroller prev disabled"}).appendTo(div4);
      //var div7 = $("<div>").attr({"class": "scroller next"}).appendTo(div4);
      var ul = $("<ul>").attr({"class": "hlist games game-cards game-cards-grid"}).appendTo(div3);
      for (i = 0; i < data.length; i++) {
        var list = $("<li>").attr({"class": "list-item game-card"}).appendTo(ul1);
        var container = $("<div>").attr({"class": "game-card-container"}).appendTo(list);
        var link = $("<a>").attr({"href": "https://www.roblox.com/games/" + data[i].assetId + "/game", "class": "game-card-link"}).appendTo(container);
        var thumbnail = $("<div>").attr({"class": "game-card-thumb-container"}).appendTo(link);
        var image = $("<img>").attr({"src": data[i].image, "class": "game-card-thumb"}).appendTo(thumbnail);
        var text = $("<div>").attr({"class": "text-overflow game-card-name"}).text(data[i].name).appendTo(link);
        var playing = $("<div>").attr({"class": "game-card-name-secondary"}).text(addCommas(data[i].players) + " Playing").appendTo(link);

        var footer = $("<div>").attr({"class": "game-card-footer"}).appendTo(container);
        var creator = $("<div>").attr({"class": "creator"}).appendTo(footer);
        var by = $("<span>").attr({"class": "text-label xsmall"}).text("By ").appendTo(creator);
        var name = $("<a>").attr({"href": data[i].creatorUrl, "class": "text-link xsmall text-overflow"}).text(data[i].creator).insertAfter(by);
        var scoreDiv = $("<a>").attr({"href": "https://fabrick.me/game/" + data[i].assetId, "class": "score-icon"}).css({"background-color": ScoreColor(data[i].score*100), "color": "#FFF"}).text(Math.floor(data[i].score*100)).insertAfter(creator);
      }

    });

    var checkExist1 = setInterval(function() {
       if ($("#GamesListContainer1 .list-item .game-card-footer .creator").length) {
            var listItem = $("#GamesListContainer1 .list-item .game-card-footer .creator");
            for (i = 0; i < requestAmount; i++) {
                var item = listItem[i];
                $("<div>").attr({"class": "loader"}).css({"position": "absolute", "top": "18px", "right": "20px", "margin": "6px"}).insertAfter(item);
            }
          clearInterval(checkExist1);
       }
    }, 100);

    var checkExist8 = setInterval(function() {
       if ($("#GamesListContainer8 .list-item .game-card-footer .creator").length) {
            var listItem = $("#GamesListContainer8 .list-item .game-card-footer .creator");
            for (i = 0; i < requestAmount; i++) {
                var item = listItem[i];
                $("<div>").attr({"class": "loader"}).css({"position": "absolute", "top": "18px", "right": "20px", "margin": "6px"}).insertAfter(item);
            }
          clearInterval(checkExist8);
       }
    }, 100);

    var checkExist11 = setInterval(function() {
       if ($("#GamesListContainer11 .list-item .game-card-footer .creator").length) {
            var listItem = $("#GamesListContainer11 .list-item .game-card-footer .creator");
            for (i = 0; i < requestAmount; i++) {
                var item = listItem[i];
                $("<div>").attr({"class": "loader"}).css({"position": "absolute", "top": "18px", "right": "20px", "margin": "6px"}).insertAfter(item);
            }
          clearInterval(checkExist11);
       }
    }, 100);






    requests1.watch("i", function (id, oldval, newval) {
        if(newval == requestAmount){
            for (i = 0; i < sort1Data.length; i++) {
                if(sort1Data[i].criticScore == null || sort1Data[i].criticScore == "--"){
                    sort1Data[i].criticScore = "--"
                }else{
                    sort1Data[i].criticScore = Math.floor(sort1Data[i].criticScore)
                }
                var listItem = $("#GamesListContainer1 .list-item .game-card-footer .creator");
                var item = listItem[sort1Data[i].location];
                var scoreDiv = $("<a>").attr({"href": "https://fabrick.me/games", "class": "score-icon"}).css({"background-color": sort1Data[i].criticColor, "color": "#FFF"}).text(sort1Data[i].criticScore).insertAfter(item);

            }
            $("#GamesListContainer1 .list-item .game-card-footer .loader").remove();

        }
    });

    requests8.watch("i", function (id, oldval, newval) {
        if(newval == requestAmount){
            for (i = 0; i < sort8Data.length; i++) {
                if(sort8Data[i].criticScore == null || sort8Data[i].criticScore == "--"){
                    sort8Data[i].criticScore = "--"
                }else{
                    sort8Data[i].criticScore = Math.floor(sort8Data[i].criticScore)
                }
                var listItem = $("#GamesListContainer8 .list-item .game-card-footer .creator");
                var item = listItem[sort8Data[i].location];
                var scoreDiv = $("<a>").attr({"href": "https://fabrick.me/games", "class": "score-icon"}).css({"background-color": sort8Data[i].criticColor, "color": "#FFF"}).text(sort8Data[i].criticScore).insertAfter(item);
            }
            $("#GamesListContainer8 .list-item .game-card-footer .loader").remove();
        }
    });

    requests11.watch("i", function (id, oldval, newval) {
        if(newval == requestAmount){
            for (i = 0; i < sort11Data.length; i++) {
                if(sort11Data[i].criticScore == null || sort11Data[i].criticScore == "--"){
                    sort11Data[i].criticScore = "--"
                }else{
                    sort11Data[i].criticScore = Math.floor(sort11Data[i].criticScore)
                }
                var listItem = $("#GamesListContainer11 .list-item .game-card-footer .creator");
                var item = listItem[sort11Data[i].location];
                var scoreDiv = $("<a>").attr({"href": "https://fabrick.me/games", "class": "score-icon"}).css({"background-color": sort11Data[i].criticColor, "color": "#FFF"}).text(sort11Data[i].criticScore).insertAfter(item);
            }
            $("#GamesListContainer11 .list-item .game-card-footer .loader").remove();
        }
    });


}
