<template id="#content_top">
  <div v-if="drawer">
    <v-navigation-drawer color="grey-darken-2" permanent name="drawer">
      <!--<v-navigation-drawer color="my-nav-color" permanent name="drawer">-->
      <div class="d-flex justify-center align-center h-100">
        <v-list color="my-nav-color">
          <v-list-item href="#content_top">講者介紹</v-list-item>
          <v-list-item href="#content_mid">講題</v-list-item>
          <v-list-item href="#content_bottom">簡介</v-list-item>
          <v-list-item href="#content_bottom_2">照片</v-list-item>
          <v-list-item href="#content_footer">心得</v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useWindowSize } from "@vueuse/core";

const drawer = ref(true);
const { width } = useWindowSize();
watchEffect(() => {
  if (width.value >= 600) {
    drawer.value = true;
  } else {
    drawer.value = false;
  }
});
</script>
