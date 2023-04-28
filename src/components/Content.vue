<template>
  <v-responsive class="d-flex align-center fill-height">
    <v-row no-gutters>
      <v-col id="content_top">
        <!--
    <v-avatar color="white">
      <v-icon icon="mdi-account-circle"></v-icon>
    </v-avatar>
    <v-img height="300" src="@/assets/logo.svg" />

    <div class="text-body-2 font-weight-light mb-n1">講員:張傅義</div>-->
        <h2 class="text-h1 font-weight-bold">張傳義</h2>
        <h3 class="ml-2">
          <p class="mb-1">
            <span>英華達工程開發總處資深協理</span>
          </p>
          <p class="mb-1">
            主要執掌: 台北工程總處負責人、Google
            JDM專案團隊負責人、醫療產品App與平台開發團隊負責人
          </p>
        </h3>
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col id="content_mid">
        <h2 class="text-h2 font-weight-bold">講題</h2>
        <v-row class="d-flex align-center justify-start">
          <v-col>
            <h3 class="ml-2">
              Probabilistic Customer Purchase Evolution Graph
            </h3>
          </v-col>
          <v-col><span class="font-weight-thin">2023/05/01</span></v-col>
        </v-row>
        <h3 class="ml-2">
          Following evolutionary theory, this study defines the commodity
          consumption gene of the customer journey in retail transactions to
          discuss the distribution and evolution process of the consumer group.
        </h3>
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col id="content_bottom">
        <h2 class="text-h2 font-weight-bold">簡介</h2>
        <span class="ml-2">......</span>
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col id="content_bottom_2">
        <h2 class="text-h2 font-weight-bold">照片</h2>
        <v-row dense>
          <v-col v-for="card in 3">
            <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                cover
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col v-for="card in 3">
            <v-card>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
                cover
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
        <!--  <Carousel /> -->
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col id="content_footer">
        <h2 class="text-h2 font-weight-bold">心得</h2>
        <span class="ml-2">......</span>
      </v-col>

      <v-divider class="divider"></v-divider>
    </v-row>
    <!--
    <div class="py-14" />
    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto">
        <v-btn
          href="https://vuetifyjs.com/components/all/"
          min-width="164"
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon icon="mdi-view-dashboard" size="large" start />

          Components
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          color="primary"
          href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
          min-width="228"
          rel="noopener noreferrer"
          size="x-large"
          target="_blank"
          variant="flat"
        >
          <v-icon icon="mdi-speedometer" size="large" start />

          Get Started
        </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn
          href="https://community.vuetifyjs.com/"
          min-width="164"
          rel="noopener noreferrer"
          target="_blank"
          variant="text"
        >
          <v-icon icon="mdi-account-group" size="large" start />

          Community
        </v-btn>
      </v-col>
    </v-row>
  -->
  </v-responsive>
</template>

<script setup>
//import Carousel from "@/components/Carousel.vue";

import { reactive } from "vue";

const cards = reactive([
  {
    title: "Card 1",
    src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  },
  {
    title: "Card 2",
    src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
  },
  {
    title: "Card 3",
    src: "https://cdn.vuetifyjs.com/images/cards/desert.jpg",
  },
  {
    title: "Card 4",
    src: "https://cdn.vuetifyjs.com/images/cards/sunset.jpg",
  },
  {
    title: "Card 5",
    src: "https://cdn.vuetifyjs.com/images/cards/sunset.jpg",
  },
  {
    title: "Card 6",
    src: "https://cdn.vuetifyjs.com/images/cards/sunset.jpg",
  },
]);
</script>

<style scoped>
.divider {
  margin-bottom: 800px;
}

h2 {
  padding: 10px 0px 0px 0px;
}

h3 {
  padding: 15px 0px;
}
</style>
