<template>
  <v-app dark>
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
