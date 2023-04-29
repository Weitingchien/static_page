<template>
  <div v-if="drawer" class="fixed-top">
    <v-toolbar :elevation="2">
      <v-btn href="#content_top"> 講者介紹 </v-btn>
      <v-btn href="#content_mid"> 講題 </v-btn>
      <v-btn href="#content_bottom"> 簡介 </v-btn>
      <v-btn href="#content_bottom_2"> 照片 </v-btn>
      <v-btn href="#content_footer"> 心得 </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useWindowSize } from "@vueuse/core";

export default {
  setup() {
    const drawer = ref(false);
    const { width } = useWindowSize();
    watch(width, (newWidth) => {
      if (newWidth <= 600) {
        drawer.value = true;
      } else {
        drawer.value = false;
      }
    });
    return {
      drawer,
    };
  },
};
</script>

<style>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
