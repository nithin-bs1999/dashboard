<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
        <div
          class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100"
        >
          <a
            href="/"
            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span class="fs-5 ms-1">Dashboard</span>
          </a>
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <a href="#" class="nav-link link-dark align-middle px-0">
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline">Users</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col py-3">
            <h1>Users</h1>
          </div>
          <div class="col text-end py-4">
            <a
              href="#"
              class="btn btn-outline-success me-3"
              data-bs-toggle="modal"
              data-bs-target="#userAddModal"
              >Add</a
            >
          </div>
        </div>
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="card-text">
              <div class="table-responsive">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>User Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody v-if="allUsers">
                    <tr v-for="(user, index) in allUsers" :key="index">
                      <td>{{ user.id }}</td>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.phone }}</td>
                      <td>
                        <button
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#userEditModal"
                          @click="editUser(user.id)"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          class="btn btn-secondary"
                          @click="deleteUser(user.id)"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade modal-lg"
    id="userAddModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="userAddModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userAddModallLabel">Add new user</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <form>
              <div class="mb-3">
                <label for="id" class="form-label">ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="id"
                  placeholder="Enter your ID"
                  v-model="userDetails.id"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                  v-model="userDetails.name"
                />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  v-model="userDetails.phone"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  v-model="userDetails.email"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            @click="addUser"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade modal-lg"
    id="userEditModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="userEditModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="userEditModalLabel">Edit User</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <form>
              <div class="mb-3">
                <label for="id" class="form-label">ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="id"
                  v-model="userDetails.id"
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="userDetails.name"
                />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  v-model="userDetails.phone"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="userDetails.email"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            @click="updateUser"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import UserService from "@/services/UserService";

const userService = new UserService();

export default {
  name: "dashboard-page",
  setup() {
    const store = useStore();

    const userDetails = ref({
      id: "",
      name: "",
      email: "",
      phone: "",
    });

    store.dispatch("getAllUsers");

    const allUsers = computed(() => store.getters.allUsers);

    const addUser = () => {
      userService.addUser(userDetails).then(() => {
        store.dispatch("getAllUsers");
      });
    };

    const deleteUser = (id) => {
      userService.deleteUser(id).then(() => {
        store.dispatch("getAllUsers");
      });
    };

    const editUser = (id) => {
      userService.getSingleUser(id).then((response) => {
        userDetails.value = response.data;
      });
    };

    const updateUser = () => {
      userService.editUser(userDetails.value).then(() => {
        store.dispatch("getAllUsers");
      });
    };

    return { allUsers, userDetails, addUser, deleteUser, editUser, updateUser };
  },
};
</script>

<style></style>
