<template>
  <div class="profile">
    <a @click="logout"><i class="fas fa-sign-out-alt"></i></a>
    <h2>My Profile</h2>
    <div id="myprofile">
      <div id="userPic">
        <i class="fas fa-user fa-10x"></i>
      </div>
      <div class="info">
        <p>First Name: </p>
        <h3>{{firstName}}</h3>
        <p>Last Name: </p>
        <h3>{{lastName}}</h3>
        <p>Username: </p>
        <h3>{{username}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
  data() {
    return {
      firstName: this.$root.$data.user.firstName,
      lastName: this.$root.$data.user.lastName,
      username: this.$root.$data.user.username
    }
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>
.profile {
  width: 90%;
  margin: auto;
}

#myprofile {
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
</style>
