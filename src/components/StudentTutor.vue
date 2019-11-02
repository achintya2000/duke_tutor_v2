<template>
  <v-container>
    <v-layout row wrap align-center>
      <v-flex>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>For Students</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>
              DukeTutor allows you to meet with you classroom TA's online and share your screen!
              Go ahead and get started!
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>Get Started</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>For Teachers</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>Create an Account and add your free times so students can contact you.</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>View Profile</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "StudentTutor"
};
</script>

<style>
</style>