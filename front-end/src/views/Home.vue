<template>
  <div class="home">
    <div id="scores">
      <h1>Creative Project</h1>
      <h3>Scores</h3>
      <div id="nbaScores">
      </div>
      <hr>
      <h3>Stats</h3>
      <div id="playerStats">
      </div>
      <hr>
      <h3>NFL</h3>
      <div id="nflScores">
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
//import moment from 'moment'
export default {
  name: 'Home',
  created() {
    fetch("https://api-nba-v1.p.rapidapi.com/games/date/2021-02-17", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "62bb312edemsh27d1c3c540c9f92p18fc85jsn8602f7f6f0db",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      for (let i=0; i < json.api.games.length; i++) {
        results += '<div class="nbaElement"><div class="teams"><img src="' + json.api.games[i].vTeam.logo + '">';
        results += "<h2>" + json.api.games[i].vTeam.shortName + "</h2>";
        results += '<img src="' + json.api.games[i].hTeam.logo + '">';
        results += "<h2>" + json.api.games[i].hTeam.shortName + "</h2>";
        if (json.api.games[i].statusGame == "Finished") {
          results += "<p>Final</p></div>"
        } else {
          results += "<p>NBA</p></div>";
        }
        if (json.api.games[i].vTeam.score.points == "" && json.api.games[i].hTeam.score.points == "") {
        results += '<div class="score"><h2>0</h2><br><br>';
        results += "<h2>0</h2></div></div>";
        }
        results += '<div class="score"><h2>' + json.api.games[i].vTeam.score.points + '</h2><br><br>';
        results += "<h2>" + json.api.games[i].hTeam.score.points + "</h2></div></div>";
        document.getElementById("nbaScores").innerHTML = results;
      }
    });
  },
}
</script>

<style>
.home {
  background-color: #42b983;
}

#scores {
  display: block;
  background-color: white;
  width: 94%;
  min-height: 700px;
  margin: auto;
}

#nbaScores {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  font-size: 10px;
}

.nbaElement {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  min-width: 200px;
  margin: 20px;
  padding: 20px;
  border: black 2px solid;
  justify-content: space-between;
}

.nbaElement img {
  max-width: 20px
}

.teams {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.score {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
