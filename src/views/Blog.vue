<template>
     <div class="blog max-w-5xl m-auto">
          <div class="hero h-96">
               <div class="hero-content">
                    <div class="max-w-md">
                         <h1 class="text-7xl font-bold text-primary-content">Cześć!</h1>
                         <p class="py-6 text-primary-content"></p>
                    </div>
               </div>
          </div>
          <div class="p-10 mb--10">
               <div class="badge font-bold p-4">NAJNOWSZE !!!</div>
          </div>
          <div class="carousel carousel-center p-10 pt-0 space-x-4">
               <div v-for="artilce in artilesLatestData" :key="artilce.id" class="carousel-item">
                    <CardArticle :data="artilce" />
               </div>
          </div>
     </div>
</template>

<script>
import { ref } from "vue";
import mainFirebase from "../firebase/index.js";
import { collection, getDocs } from "@firebase/firestore";

import CardArticle from "../components/CardArticle.vue";

export default {
     components: {
          CardArticle,
     },
     setup() {
          //download articles
          const { db } = mainFirebase();
          const articlesRef = collection(db, "articles");
          const everyArticles = ref([]);

          //downloadAllArticles
          const downloadArticles = async () => {
               try {
                    const articles = await getDocs(articlesRef);
                    everyArticles.value = articles;
                    articlesLatest();
               } catch (error) {
                    console.log(error.message);
               }
          };
          downloadArticles();

          //write latest section
          const artilesLatestData = ref([]);
          const articlesLatest = () => {
               everyArticles.value.forEach((e) => {
                    if (e.data().new) {
                         artilesLatestData.value.push(e);
                    }
               });
          };

          return { artilesLatestData };
     },
};
</script>

<style lang="scss" scoped>
.blog {
     width: 100%;
     margin-top: 90px;

     .hero {
          background-color: #0f222d;
     }

     .badge {
          background-color: #fef4cf;
          color: #0f222d;
          border: 0;
     }
}
</style>
