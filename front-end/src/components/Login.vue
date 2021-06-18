<template>
<div class="signin">
  <div class="signinBox">
    <form class="pure-form">
    <div id="pic">
      <img src="favicon.ico">
    </div>
      <div class="combinedBox">
        <div class="register">
          <legend>Register</legend>
          <input placeholder="first name" v-model="firstName">
          <input placeholder="last name" v-model="lastName">
          <input placeholder="username" v-model="username">
          <input type="password" placeholder="password" v-model="password">
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="register">Register</button>
          <br>
          <p v-if="error" class="error">{{error}}</p>
        </div>
        <div class="login">
          <legend>Login</legend>
          <input placeholder="username" v-model="usernameLogin">
          <input type="password" placeholder="password" v-model="passwordLogin">
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
          <br>
          <p v-if="errorLogin" class="error">{{errorLogin}}</p>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
    }
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.favoriteNumber || !this.username || !this.password)
        return;
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          favoriteNumber: this.favoriteNumber,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin)
        return;
      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>
#pic {
  maring: auto;
}

.signin {
  padding: 120px;
  display: flex;
  justify-content: center;
}

.signinBox {
  text-align: center;
}

.signin form legend {
  font-size: 28px;
  font-family: cursive;
}

.combinedBox {
  display: flex;
  flex-wrap: wrap;
}

.login {
  background-color: #f2f2f2;
  border: black 5px solid;
}

.register {
  background-color: #42b983;
  border: black 5px solid;
}

input {
  margin: 20px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

button {
  margin: 10px;
  flex-direction: column;
}

.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}

/* view on large screens */
@media only screen and (min-width: 800px) {
  .combinedBox {
    flex-direction: row;
  }
}

/* view on small screens */
@media only screen and (max-width: 800px) and (min-width: 540px) {
  .combinedBox {
    flex-direction: column;
  }
}
</style>
