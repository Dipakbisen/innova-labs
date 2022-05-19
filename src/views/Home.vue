<template>
  <div class="home">
    <Login class="mx-auto" @login="login = $event" v-if="login"></Login>
    <Signup class="mx-auto" @login="login = $event" v-else></Signup>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: "Home",
  components: {
    Login,
    Signup,
  },
  data() {
    return { login: true };
  },
};
</script>
