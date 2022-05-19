<template>
  <div class="card" style="width: 25rem">
    <div class="card-body">
      <h5 class="card-title text-center">Login</h5>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control orm-control-sm"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control orm-control-sm"
          id="password"
          placeholder="Password"
        />
      </div>

      <div class="text-center">
        <button type="button" class="btn btn-success mx-auto" @click="login">
          Login
        </button>
      </div>
      <br />
      <p class="text-center fs-6 create-account" @click="createAccount">
        Create New Account
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
  },
  methods: {
    login() {
      axios
        .post("https://reqres.in/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log("Response =>", response.data.token);
          Swal.fire({
            icon: "success",
            text: "Your account has been successfully login.",
            timer: 2000,
            timerProgressBar: true,
            backdrop: false,
          }).then((res) => {
            if(res.isConfirmed || res.isDismissed) {
              this.$router.push('/userslist');
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createAccount() {
      this.$emit("login", false);
    },
  },
};
</script>

<style scoped>
.create-account {
  cursor: pointer;
  color: #0d6efd;
}
</style>
