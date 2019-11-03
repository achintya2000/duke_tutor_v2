<template>
  <div>
    <h1>Students</h1>
    <article v-for="(user, idx) in users" :key="idx">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.learn }}</h2>
      <v-btn @click="deleteLocation(user.id)">Delete</v-btn>
    </article>

    <form @submit="addStudent(name, learn)">
      <input v-model="name" placeholder="Name" />
      <input v-model="learn" placeholder="Learn" />
      <v-btn @click="addSomeone(name,learn)">Add New Student</v-btn>
    </form>
  </div>
</template>

<script>
import db from "../firebase/index";

export default {
  name: "StudentDB",
  data() {
    return {
      users: [],
      name: "",
      learn: ""
    };
  },
  firestore() {
    return {
      users: db.collection("students").orderBy("name")
    };
  },
  methods: {
    addSomeone(name, learn) {
      db.collection("students").add({
        name: name,
        learn: learn,
      });
    },
    deleteLocation(id) {
      db.collection("students")
        .doc(id)
        .delete();
    }
  }
};
</script>
