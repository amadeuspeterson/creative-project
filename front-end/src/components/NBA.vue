<template>
  <div class="nba">
    <div id="scores">
      <h1>Creative Project</h1>
      <h3>Scores</h3>
      <div id="nbaScores">
      </div>
      <h3>Fan Reactions</h3>
      <div id="fanReactions">
        <textarea id="Reaction" v-model="reaction" placeholder="React Here"></textarea>
        <br>
        <button type="button" style="float: right;" @click.prevent="post">Submit</button>
      </div>
      <div id="comments">
        <div class="message">
          <p></p>
          <h3></h3>
        </div>
        <div class="buttons">
          <button type="button" @click.prevent="edit">Edit</button>
          <button type="button">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NBA',
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      reaction: "",
      addItem: null,
      items: []
    }
  },
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
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/profile");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async edit() {

    },
    async delete() {

    },
    async post() {
      try {
        let response = await axios.post('/api/profile', {
          firstName: this.$root.$data.user.firstName,
          lastName: this.$root.$data.user.lastName,
          reaction: this.reaction
        });
        this.addItem = response.data;
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>

<style>
#nbaScores {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  font-size: 10px;
  justify-content: center;
}

.nbaElement {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
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

#fanReactions {
  margin: 30px;
}

#fanReactions textarea {
  width: 90%;
  margin: auto;
}

#fanReactions button {
  float: right;
  margin-right: 5%;
}

#comments {
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f2f2f2;
  min-height: 100px;
  width: 20%;
}

/* view on large screens */
@media only screen and (min-width: 1024px) {
  .nbaElement {
    min-width: 25%;
  }
}

/* view on medium-sized screens */
@media only screen and (max-width: 1200px) and (min-width: 1000px) {
  .nbaElement {
    min-width: 40%;
  }
}

/* view on small screens */
@media only screen and (max-width: 1000px) and (min-width: 540px) {
  .nbaElement {
    min-width: 85%;
  }
}
</style>
