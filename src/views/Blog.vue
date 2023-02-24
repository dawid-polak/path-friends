<template>
     <div class="blog m-auto">
          <div class="hero h-96">
               <div class="hero-content">
                    <div class="max-w-md">
                         <h1 class="text-7xl font-bold text-primary-content">Blog</h1>
                         <p class="py-6 text-primary-content"></p>
                    </div>
               </div>
          </div>
          <div class="carousel carousel-center p-10 space-x-4 max-w-5xl  m-auto">
               <div v-for="artilce in artilesLatestData" :key="artilce.id" class="carousel-item">
                    <CardArticle :data="artilce" />
               </div>
          </div>
          <AboutUsCard />
     </div>
</template>

<script>
import { ref } from "vue";
import mainFirebase from "../firebase/index.js";
import { collection, getDocs } from "@firebase/firestore";

import CardArticle from "../components/CardArticle.vue";
import AboutUsCard from "../components/AboutUsCard.vue";

export default {
     components: {
          CardArticle,
          AboutUsCard
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
     font-family: 'Bungee Inline', cursive;

     .hero {
          background-color: #0f222d;
          background-image: url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80);
     }

     .badge {
          background-color: #fef4cf;
          color: #0f222d;
          border: 0;
     }
}
</style>
