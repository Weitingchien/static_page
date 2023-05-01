<template>
  <v-responsive class="d-flex align-center fill-height content">
    <v-row no-gutters>
      <v-col class="col" id="content_top">
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

      <v-col class="col" id="content_mid">
        <h2 class="text-h2 font-weight-bold">講題</h2>
        <v-row class="d-flex align-center justify-start">
          <v-col>
            <h3 class="ml-2">價值 - 工作相關、個人相關與創業相關</h3>
          </v-col>
          <v-col><span class="font-weight-thin">2023/05/01</span></v-col>
        </v-row>
        <!--
        <h3 class="ml-2">
          Following evolutionary theory, this study defines the commodity
          consumption gene of the customer journey in retail transactions to
          discuss the distribution and evolution process of the consumer group.
        </h3>
        -->
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col class="col" id="content_bottom">
        <h2 class="text-h2 font-weight-bold">簡介</h2>
        <span class="ml-2">......</span>
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col class="col col_cards" id="content_bottom_2">
        <h2 class="text-h2 font-weight-bold">照片</h2>
        <v-row dense>
          <v-col class="cards" v-for="card in cards">
            <transition name="v-scale">
              <v-card
                v-if="showCard"
                width="1477px"
                height="1108px"
                fill-height
              >
                <v-img
                  :src="card.src"
                  width="1477px"
                  height="1108px"
                  cover
                ></v-img>
              </v-card>
            </transition>
          </v-col>
        </v-row>
        <!--  <Carousel /> -->
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col class="col" id="content_footer">
        <h2 class="text-h2 font-weight-bold">心得</h2>
        <span class="ml-2">......</span>
      </v-col>

      <v-divider class="divider"></v-divider>
    </v-row>
  </v-responsive>
</template>

<script setup>
//import Carousel from "@/components/Carousel.vue";

import { ref, reactive } from "vue";

const cards = reactive([
  {
    title: "Card 5",
    src: "https://raw.githubusercontent.com/Weitingchien/images/master/jpg/05.jpg",
  },
  {
    title: "Card 4",
    src: "https://raw.githubusercontent.com/Weitingchien/images/master/jpg/04.jpg",
  },
  {
    title: "Card 3",
    src: "https://raw.githubusercontent.com/Weitingchien/images/master/jpg/03.jpg",
  },
  {
    title: "Card 2",
    src: "https://raw.githubusercontent.com/Weitingchien/images/master/jpg/02.jpg",
  },
  {
    title: "Card 1",
    src: "https://raw.githubusercontent.com/Weitingchien/images/master/jpg/01.jpg",
  },
  {
    title: "Card 6",
    src: "https://raw.githubusercontent.com/Weitingchien/images/master/jpg/06.jpg",
  },
]);

const showCard = ref(false);

setTimeout(() => {
  showCard.value = true;
}, 1500);
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

.content {
  padding-top: 64px;
}

.col {
  margin: 50px;
}

.col_cards {
  width: 25%;
  height: 25%;
}
.v-scale-enter-active,
.v-scale-leave-active {
  transition: transform 0.5s;
}

.v-scale-enter {
  transform: scale(0);
}

.v-scale-enter-to {
  transform: scale(1);
}

.v-scale-leave-to {
  transform: scale(0);
}
</style>
