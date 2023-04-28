<template>
  <v-app color="my-custom-color">
    <Navigation />
    <v-main>
      <v-container class="fill-height">
        <Content />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Content from "@/components/Content.vue";
import Navigation from "@/components/Navigation.vue";
</script>

<style scoped>
/*
.v-application {
  background-color: #f7f1f0;
}
.v-navigation-drawer {
  background-color: #c3a6a0;
}
*/
</style>
