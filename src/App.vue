<template>
  <v-app color="my-custom-color">
    <v-main>
      <Tool_Bar />
      <Navigation />
      <v-container class="fill-height">
        <Content />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Content from "@/components/Content.vue";
import Navigation from "@/components/Navigation.vue";
import Tool_Bar from "@/components/Tool_Bar.vue";
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
