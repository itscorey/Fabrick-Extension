var loc = window.location.href;
var match = loc.match(/\d+/);
var id = match[0];



var criticScore = "--";
var userScore = "--";
var criticColor = "#9e9e9e";
var userColor = "#9e9e9e";
var criticReview = "No";
var userReview = "No";

var critics = 0
var users = 0

var changelog = false;
var changelogs = {};
var getData = $.getJSON( "https://fabrick.me/game_data/"+id+"/overall?page=0", function( data ) {
    criticScore = data.CriticScore;
    userScore = data.UserScore;

    if(data.CriticCount){
        critics = data.CriticCount;
    }

    if(data.UserCount){
        users = data.UserCount;
    }

    if(criticScore == null || criticScore == "--"){
        criticScore = "--"
    }else{
        if(critics < 5){
          criticScore = "--"
        }else{
          criticScore = Math.floor(criticScore)
        }
    }

    if(userScore == null || userScore == "--"){
        userScore = "--"
    }else{
      if(users < 5){
        userScore = "--"
      }else{
        userScore = Math.floor(userScore)
      }
    }

    criticColor = ScoreColor(criticScore);
    userColor = ScoreColor(userScore);
    criticReview = scoreAverage(criticScore, critics);
    userReview = scoreAverage(userScore, users);




    if(data.Changelog.length > 0){
        changelog = true;
        changelogs = data.Changelog
    }


});
