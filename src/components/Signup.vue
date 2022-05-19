<template>
  <div class="card" style="width: 25rem">
    <div class="card-body">
      <h5 class="card-title text-center">Sign Up</h5>
      <div class="mb-3">
        <label for="fullname" class="form-label">Name</label>
        <input
          v-model="fullName"
          type="fullname"
          class="form-control orm-control-sm"
          id="fullname"
          placeholder="Full name"
        />
      </div>
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
      <div class="mb-3">
        <label for="confirm_password" class="form-label"
          >Confirm Password</label
        >
        <input
          v-model="c_password"
          type="password"
          class="form-control orm-control-sm"
          id="confirm_password"
          placeholder="Confirm Password"
        />
      </div>

      <div class="text-center">
        <button type="button" class="btn btn-success mx-auto" @click="signup">
          Sign Up
        </button>
      </div>
      <br />
      <p class="text-center fs-6 login" @click="showLogin">Login</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      fullName: "Michael Joseph Jackson",
      email: "eve.holt@reqres.in",
      password: "pistol",
      c_password: "pistol",
    };
  },
  methods: {
    signup() {
      axios
        .post("https://reqres.in/api/register", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log("Response =>", response.data);
          Swal.fire({
            icon: "success",
            text: "Your account has been created.",
            timer: 2000,
            timerProgressBar: true,
            backdrop: false,
          }).then((res) => {
            if(res.isConfirmed || res.isDismissed) {
              this.showLogin();
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showLogin() {
      this.$emit("login", true);
    },
  },
};
</script>

<style scoped>
.login {
  cursor: pointer;
  color: #0d6efd;
}
</style>
