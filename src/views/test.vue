<template>
  <div>
    <h1>Hi</h1>
    <article v-for="(location, idx) in locations" :key="idx">
      <h1>{{ location.name }}</h1>
      <h2>{{ location.major }}</h2>
    </article>

    <form @submit="addSomeone(name, major)">
      <input v-model="name" placeholder="Location Name" />
      <input v-model="major" placeholder="Location Image URL" />
      <button type="submit">Add New Location</button>
    </form>
  </div>
</template>

<script>
import db from "../firebase/index";

export default {
  name: "testing",
  data() {
    return {
      locations: [],
      name: "",
      major: ""
    };
  },
  firestore() {
    return {
      locations: db.collection("users").orderBy("createdAt")
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
    }
  }
};
</script>
