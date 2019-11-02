<template>
  <div>
    <h1>Hi</h1>
    <article v-for="(user, idx) in users" :key="idx">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.major }}</h2>
      <v-btn @click="deleteLocation(user.id)">Delete</v-btn>
    </article>

    <form @submit="addSomeone(name, major)">
      <input v-model="name" placeholder="Name" />
      <input v-model="major" placeholder="Major" />
      <button type="submit">Add New Person</button>
    </form>
  </div>
</template>

<script>
import db from "../firebase/index";

export default {
  name: "testing",
  data() {
    return {
      users: [],
      name: "",
      major: ""
    };
  },
  firestore() {
    return {
      users: db.collection("users").orderBy("createdAt")
    };
  },
  methods: {
    addSomeone(name, major) {
      const created = new Date();
      db.collection("users").add({
        name: name,
        major: major,
        createdAt: created
      });
    },
    deleteLocation(id) {
      db.collection("users")
        .doc(id)
        .delete();
    }
  }
};
</script>
