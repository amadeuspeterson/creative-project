<template>
  <div class="home">
    <div class="content">
      <h1>Creative Project</h1>
      <h3>NBA</h3>
      <div class="NBA">
        <div id="nbaScores">
        </div>
      </div>
      <hr>
      <h3>MLB</h3>
      <div class="MLB">
        <div id="mlbScores">
        </div>
      </div>
      <hr>
      <div class="NFL">
        <h3>NFL</h3>
        <div id="nflScores">
        </div>
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
    fetch("https://api-nba-v1.p.rapidapi.com/games/date/2021-06-16", {
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
        results += '<div class="nbaElement"><img src="' + json.api.games[i].vTeam.logo + '">';
        results += "<h2>" + json.api.games[i].vTeam.shortName + "</h2>";
        results += '<img src="' + json.api.games[i].hTeam.logo + '">';
        results += "<h2>" + json.api.games[i].hTeam.shortName + "</h2></div>";
        document.getElementById("nbaScores").innerHTML = results;
      }
    });
    /*.catch(err => {
      console.error(err);
    });*/
  },
}
</script>

<style scoped>
.home {
  background-color: #42b983;
}

.content {
  background-color: #ffffff;
  width: 94%;
  margin: auto;
}

.NBA {
  height: 150px;
}

#nbaScores {
  display: flex;
  margin: 30px;
  font-size: 10px;

}

.nbaElement {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 200px;
  border: black 2px solid;
  margin: 10px;
  padding: 10px;
}

</style>
