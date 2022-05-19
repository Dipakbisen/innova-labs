<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <h3>Users list</h3>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addUserModal"
      >
        Add User
      </button>
    </div>
    <hr />
    <table class="table table-striped">
      <thead>
        <th>Sr.</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="user in list" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm me-3" data-bs-toggle="modal" data-bs-target="#addUserModal" @click="editUserModal(user.id, user.first_name)">Edit</button>
            <button type="button" class="btn btn-danger btn-sm mx-1" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Add user modal -->
    <div
      class="modal fade"
      id="addUserModal"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Add User</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">First Name</label>
              <input
                v-model="firstname"
                type="text"
                class="form-control orm-control-sm"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Last Name</label>
              <input
                v-model="lastname"
                type="text"
                class="form-control orm-control-sm"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-if="edit" @click="editUser(tempId,firstname)">Update</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-else @click="addUser">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      firstname: "Michael",
      lastname: "Jackson",
      tempId: '',
      edit: false,
    };
  },
  computed: { ...mapGetters({ list: "getUsersList" }) },
  methods: {
    addUser() {
      this.$store.dispatch("createUser", { name: this.firstname, job: 'leader' });
    },
    editUserModal(id, firstname) {
      this.tempId = id;
      this.firstname = firstname;
      this.edit = true;
    },
    editUser(id) {
      this.$store.dispatch("editUser", {
        id: id, name: this.firstname, job: 'leader'
      });
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", { id: id });
    }
  },
  created() {
    this.$store.dispatch("fetchUsersList");
  },
};
</script>

<style scoped></style>
