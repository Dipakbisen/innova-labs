import axios from "axios";
export default {
  state: { usersList: [] },

  actions: {
    fetchUsersList({ commit }) {
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((response) => {
          commit("setUsersList", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createUser({ commit }, { name, job }) {
      axios
        .post("https://reqres.in/api/users", {
          name: name,
          job: job
        })
        .then((res) => {
          commit("setCreatedUser", {
            id: res.data.id, first_name: res.data.name, last_name: 'Jackson'
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editUser({ commit }, { id, name, job }) {
      axios
        .put(`https://reqres.in/api/users/${id}`, {
          name: name,
          job: job
        })
        .then((res) => {
          commit("setEditedUser", {
            id: id, first_name: res.data.name, last_name: 'Jackson'
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteUser({ commit }, { id }) {
      axios
        .delete(`https://reqres.in/api/users/${id}`)
        .then((res) => {
          console.log(res.data);
          commit("deleteUser", id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mutations: {
    setUsersList(state, value) {
      state.usersList = value;
    },
    setCreatedUser(state, value) {
      state.usersList.push(value);
    },
    setEditedUser(state, value) {
      const index = state.usersList.findIndex( list => list.id == value.id );
      state.usersList.splice(index, 1, value);
    },
    deleteUser(state, id) {
      const index = state.usersList.findIndex( list => list.id == id );
      state.usersList.splice(index, 1);
    },
  },

  getters: {
    getUsersList(state) {
      return state.usersList;
    },
  },
};
