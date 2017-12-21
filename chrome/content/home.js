/*var checkExist6 = setInterval(function() {
   if ($("#recently-visited-places-list .list-item .game-card-footer .creator").length) {
        var listItem = $("#recently-visited-places-content .list-item .game-card-footer .creator");
        for (i = 0; i < requestAmount; i++) {
            var item = listItem[i];
            $("<div>").attr({"class": "loader"}).css({"position": "absolute", "top": "18px", "right": "20px", "margin": "6px"}).insertAfter(item);
        }
      clearInterval(checkExist6);
   }
}, 100);*/

$.getJSON( "https://fabrick.me/update_data", function( data ) {
  var section = $("<div>").attr({"class": "section"}).appendTo(".home-right-col");
  var header = $("<div>").attr({"class": "section-header"}).appendTo(section);
  var title = $("<h3>").text("Game Updates").appendTo(header);
  var content = $("<div>").attr({"class": "section-content"}).appendTo(section);
  var feed = $("<ul>").attr({"class": "vlist feeds"}).appendTo(content);
  for (i = 0; i < data.length; i++) {
    var container = $("<li>").attr({"class": "list-item"}).appendTo(feed);
    var link = $("<a>").attr({"href": "https://www.roblox.com/games/" + data[i].GameId +"/game", "class": "avatar avatar-headshot-md list-header"}).css("border-radius", "0").appendTo(container);
    var img = $("<img>").attr({"src": data[i].Image, "class": "avatar-card-image"}).css("border-radius", "0").appendTo(link);
    var body = $("<div>").attr({"class": "list-body"}).appendTo(container);
    var name = $("<p>").attr({"class": "list-content"}).appendTo(body);
    var name_link = $("<a>").attr({"href": "https://www.roblox.com/games/" + data[i].GameId +"/game", "class": "text-name"}).text(data[i].Name).appendTo(name);
    var update = $("<p>").attr({"class": "feedtext linkify"}).css({"white-space": "pre-line"}).text(data[i].Content).appendTo(body);
    var date = $("<span>").attr({"class": "xsmall text-date-hint"}).text(data[i].Date).appendTo(body);
  }

});


requests6.watch("i", function (id, oldval, newval) {
    if(newval == requestAmount){
        var check = setInterval(function() {
            if($("#recently-visited-places-list .list-item .game-card-footer .creator").length == requestAmount){
                for (i = 0; i < sort6Data.length; i++) {
                    if(sort6Data[i].criticScore == null || sort6Data[i].criticScore == "--"){
                        sort6Data[i].criticScore = "--"
                    }else{
                        sort6Data[i].criticScore = Math.floor(sort6Data[i].criticScore)
                    }
                    var listItem = $("#recently-visited-places-list .list-item .game-card-footer .creator");
                    var item = listItem[sort6Data[i].location];
                    var scoreDiv = $("<div>").attr({"class": "score-icon"}).css("background-color", sort6Data[i].criticColor).text(sort6Data[i].criticScore).insertAfter(item);

                }
                //$("#recently-visited-places-list .list-item .game-card-footer .loader").remove();
                clearInterval(check);
            }
        }, 100);

    }
});

requests5.watch("i", function (id, oldval, newval) {
    if(newval == requestAmount){
        var check = setInterval(function() {
            if($("#my-favorites-games-list .list-item .game-card-footer .creator").length == requestAmount){
                for (i = 0; i < sort5Data.length; i++) {
                    if(sort5Data[i].criticScore == null || sort5Data[i].criticScore == "--"){
                        sort5Data[i].criticScore = "--"
                    }else{
                        sort5Data[i].criticScore = Math.floor(sort5Data[i].criticScore)
                    }
                    var listItem = $("#my-favorites-games-list .list-item .game-card-footer .creator");
                    var item = listItem[sort5Data[i].location];
                    var scoreDiv = $("<div>").attr({"class": "score-icon"}).css("background-color", sort5Data[i].criticColor).text(sort5Data[i].criticScore).insertAfter(item);

                }
                //$("#recently-visited-places-list .list-item .game-card-footer .loader").remove();
                clearInterval(check);
            }
        }, 100);

    }
});

requests17.watch("i", function (id, oldval, newval) {
    if(newval == requestAmount){
        var check = setInterval(function() {
            if($("#friend-activity .list-item .game-card-footer .creator").length == requestAmount){
                for (i = 0; i < sort17Data.length; i++) {
                    if(sort17Data[i].criticScore == null || sort17Data[i].criticScore == "--"){
                        sort17Data[i].criticScore = "--"
                    }else{
                        sort17Data[i].criticScore = Math.floor(sort17Data[i].criticScore)
                    }
                    var listItem = $("#friend-activity .list-item .game-card-footer .creator");
                    var item = listItem[sort17Data[i].location];
                    var scoreDiv = $("<div>").attr({"class": "score-icon"}).css("background-color", sort17Data[i].criticColor).text(sort17Data[i].criticScore).insertAfter(item);

                }
                //$("#recently-visited-places-list .list-item .game-card-footer .loader").remove();
                clearInterval(check);
            }
        }, 100);

    }
});
