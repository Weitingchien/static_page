<template>
  <v-app dark>
    <Navigation />
    <v-main>
      <v-container class="fill-height">
        <Content />
        <Carousel />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Content from "@/components/Content.vue";
import Carousel from "@/components/Carousel.vue";
import Navigation from "@/components/Navigation.vue";
</script>
