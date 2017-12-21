
getData.done(function() {
    $(".game-main-content").css("height", "450px");
    $(".game-buttons-container").css("bottom", "70px");

    var critScore = $("<div>").attr({"class": "critic-score"}).insertAfter(".game-calls-to-action");;
    $("<div>").attr({"class": "score-box"}).css("background-color", criticColor).text(criticScore).appendTo(critScore);
    $("<div>").attr({"class": "score-text"}).text("Critic Score").appendTo(critScore);
    $("<span>").attr({"class": "score-count"}).html(criticReview+" reviews based on <b>"+ critics +"</b> critic(s)").appendTo(critScore);

    var useScore = $("<div>").attr({"class": "critic-score"}).insertAfter(critScore);;
    $("<div>").attr({"class": "score-circle"}).css("background-color", userColor).text(userScore).appendTo(useScore);
    $("<div>").attr({"class": "score-text"}).text("User Score").appendTo(useScore);
    $("<span>").attr({"class": "score-count"}).html(userReview+" reviews based on <b>"+ users +"</b> users(s)").appendTo(useScore);


    if(changelog == true){
        $("<div class='section game-changelog-container'><h3>Changelog</h3><div class='section-content'></div></div>").insertAfter(".game-about-container");
    }

    if(changelogs){
        for (i = 0; i < changelogs.length; i++) {
           $("<p class='text-label'>Update - " + dateFormat(changelogs[i].version) + "</p><div style='margin: 6px 12px 12px 12px;'><pre id='"+changelogs[i].version+"' style='padding: 12px; border-radius: 2px; background-color: rgba(0, 0, 0, 0.04);'></pre></div>").appendTo(".game-changelog-container .section-content");
            $("#"+changelogs[i].version).text(changelogs[i].content);
        }
    }

    var fabView = $("<div>").attr({"class": "view-button"}).insertAfter(useScore);
    $("<a>").attr({"href": "https://fabrick.me/game/"+id, "target": "_blank", "class": "btn-secondary-md"}).text("View on Fabrick").appendTo(fabView);
});

getData.fail(function() {
    var fabView = $("<div>").attr({"class": "view-button"}).insertAfter(".game-calls-to-action");
    $("<a>").attr({"href": "https://fabrick.me/game/"+id, "target": "_blank", "class": "btn-secondary-md"}).text("View on Fabrick").appendTo(fabView);
});
