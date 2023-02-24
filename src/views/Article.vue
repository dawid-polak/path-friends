<template>
     <AlertLiking v-if="alertLiking" />
     <div class="article max-w-5xl m-auto">
          <img class="mainImg" :src="artilceData.mainImg" :alt="artilceData.title" />
          <div class="mt-10">
               <div class="hero-content justify-start">
                    <div class="max-w-xl">
                         <h1 class="mb-5 text-5xl font-bold font-serif">{{ artilceData.title }}</h1>
                         <p class="mb-5 max-w-xl font-serif text-justify">{{ artilceData.description }}</p>
                    </div>
               </div>
          </div>
          <div class="content max-w-2xl m-auto">
               <p class="mt-10 mx-8 font-serif text-lg font-thin">{{ artilceData.content }}</p>
               <p class="mx-8 my-3 text-sm text-neutral">{{ artilceData.author }}</p>
          </div>
          <div class="max-w-2xl m-auto text-center">
               <button @click="handleUpdateLikes" class="btn btn-outline btn-error gap-2 mx-8 mb-5 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Podbało mi się
               </button>
          </div>
     </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import mainFirebase from "../firebase/index.js";
import { doc, getDoc } from "@firebase/firestore";
import updateLikes from "../firebase/upadateLikes.js";
import AlertLiking from "../components/AlertLiking.vue";

export default {
     components: {
          AlertLiking
     },
     setup() {
          const route = useRoute();
          const { db } = mainFirebase();
          const idArticle = ref(route.query.idArt);
          const artilceData = ref({});
          const likesNumber = ref();
          const alertLiking = ref(false)

          // download data article
          const downloadData = async () => {
               const docRef = doc(db, "articles", idArticle.value);
               try {
                    const article = await getDoc(docRef);

                    artilceData.value = article.data();

                    likesNumber.value = artilceData.value.likes;
               } catch (error) {
                    console.log(error.message);
               }
          };
          downloadData();

          //updata likes
          const handleUpdateLikes = () => {
               updateLikes("articles", idArticle.value, likesNumber.value);
               showAlertLiking();
          };

           //show alert liking
           const showAlertLiking = () => {
               alertLiking.value = !alertLiking.value;

               setTimeout(() => {
                    alertLiking.value = !alertLiking.value;
               }, 3000)
          }

          return { artilceData, handleUpdateLikes, alertLiking };
     },
};
</script>

<style lang="scss" scoped>
.article {
     margin-top: 90px;

     .mainImg {
          margin-top: -300px;
          background-size: cover;

          @media only screen and (max-width: 750px) {
               margin-top: -200px;
          }

          @media only screen and (max-width: 550px) {
               margin-top: -100px;
          }

          @media only screen and (max-width: 450px) {
               margin-top: -40px;
          }
     }
     .hero {
          height: 400px;
     }
}
</style>
