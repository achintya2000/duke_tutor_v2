<template>
  <div>
    <h1>Classes</h1>
    <article v-for="(user, idx) in users" :key="idx">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.code }}</h2>
      <v-btn @click="deleteLocation(user.id)">Delete</v-btn>
    </article>

    <form @submit="addClass(name, code)">
      <input v-model="name" placeholder="Name" />
      <input v-model="code" placeholder="Class Code" />
      <v-btn @click="addClass(name,code)">Add New Class</v-btn>
    </form>
  </div>
</template>

<script>
import db from "../firebase/index";

export default {
  name: "ClassDB",
  data() {
    return {
      users: [],
      name: "",
      code: null
    };
  },
  firestore() {
    return {
      users: db.collection("classes").orderBy("name")
    };
  },
  methods: {
    addClass(name, code) {
      db.collection("classes").add({
        name: name,
        code: code,
      });
    },
    deleteLocation(id) {
      db.collection("classes")
        .doc(id)
        .delete();
    }
  }
};
</script>
