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
      </v-col>

      <v-divider class="divider"></v-divider>

      <v-col class="col" id="content_bottom">
        <h2 class="text-h2 font-weight-bold">簡介</h2>
        <h3 class="ml-2">
          主要介紹公司內部的一些產品: Earbuds、Wifi Speaker、IoT/Module、Cloud
          health Management device、商業模型:NPDI Services、Integrated
          ODM、Contract
          Manufacturing還有企業模式、個人管裡、職場管理，在最後的QA問答講師回答了一些問題，像是無法達到客戶需求的時候要如何解決，講師的回覆是有遇過客戶提出5個不相關的需求，持續65天無法解決，最後是雙方妥協，而如果是技術層面的問題通常都可以解決，還有關於人際關係上的取捨，講師建議可以去看博弈論（賽局理論）。
        </h3>
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
        <h3 class="ml-2">講師提到的以下幾點令人印象深刻:</h3>
        <h3 class="ml-2">
          在介紹產品時提到了一個只需要2ml的血就可以偵測體內有癌細胞的可能性(循環腫瘤細胞機台)，還有南昌的團隊建立了一個雲端健康管理平台(在建立IoT雲端平台花費的成本非常之高)。
        </h3>
        <h3 class="ml-2">
          在商業模式方面提到可以區分成運營管理、營銷管理、財會管理，而管理的核心是運用最小的資源，盡可能最大化的達成預定的目標。
        </h3>
        <h3 class="ml-2">
          在個人管理上提到開放的心態，才能持續成長，並且要有系統性思維必須要有適應力、自組織、層次性。
        </h3>
        <h3 class="ml-2">
          在職場管理最重要的就是理解需求，找到自己的位置，然後對於"商業"這一詞來說就是創造與傳遞價值，並從中獲取價值的過程。
        </h3>
        <h3 class="ml-2">
          最後非常感謝講師的分享，不管在產品的介紹或是企業上都有新的啟發。
        </h3>
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
