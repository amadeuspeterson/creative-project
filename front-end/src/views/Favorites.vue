<template>
  <div class="favorites">
    <h2>My Profile</h2>
    <div id="profile">
      <div id="userPic">
        <i class="fas fa-user fa-10x"></i>
      </div>
      <div class="info">
        <p>First Name: </p>
        <h3>Amadeus</h3>
        <p>Favorite Number: </p>
        <h3>3</h3>
        <p>Username: </p>
        <h3>amadeuspeterson</h3>
        <p>Password: </p>
        <h3>Moneyball3</h3>
      </div>
      <div class="addTeam">
        <h3>Add Favorite Team</h3>
        <form>
          <input type="text" placeholder="Favorite Team">
          <button type="button">Submit</button>
        </form>
        <h3>My Favorite Teams</h3>
        <!--list of favorite teams-->
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
}
</script>

<style scoped>
.favorites {
  width: 90%;
  margin: auto;
}

#profile {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

#userPic {
  background-color: #f2f2f2;
  height: 200px;
  width: 200px;
  border-radius: 50%;
}

.info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
}

#1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
