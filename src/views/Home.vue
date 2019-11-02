<template>
  <div class="home">
    <home-info></home-info>
    <student-tutor></student-tutor>
  </div>
</template>

<script>
import HomeInfo from "../components/HomeInfo";
import StudentTutor from "../components/StudentTutor";

export default {
  name: "home",
  components: {
    HomeInfo,
    StudentTutor
  }
};
</script>

<style scoped>
</style>
