<template>
     <div>
          <AlertLiking v-if="alertLiking" />
          <div class="card w-80 sm:w-96 bg-base-100 shadow-xl">
               <figure class="h-48"><img class="" :src="data.mainImg" alt="Shoes" /></figure>
               <div class="card-body p-6">
                    <h2 class="card-title">
                         <span @click="goToArticle" class="link link-hover">{{ data.title }}</span>

                         <div v-if="data.new" class="badge badge-secondary badge-new">NEW</div>
                    </h2>
                    <p>{{ data.description }}</p>

                    <div class="card-actions justify-start">
                         <div v-for="tag in data.tags" :key="tag" class="badge badge-outline">#{{ tag }}</div>
                    </div>
               </div>

               <div class="flex flex-row-reverse">
                    <button @click="goToArticle" class="btn btn-outline btn-info m-2 mt-0 btn-read">czytaj</button>

                    <button @click="handleUpdateLike" class="btn btn-outline btn-error gap-2 m-2 mt-0">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                         </svg>
                         {{ likes }}
                    </button>
               </div>
          </div>
     </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import updateLikes from "../firebase/upadateLikes.js";
import AlertLiking from "./AlertLiking.vue";

export default {
     props: ["data"],
     components: {
          AlertLiking,
     },
     setup(props) {
          const idArticle = ref(props.data.id);
          const data = ref(props.data.data());
          const router = useRouter();
          const likes = ref(data.value.likes);
          const alertLiking = ref(false)

          //router
          const goToArticle = () => {
               router.push({ name: "article", params: { id: data.value.name }, query: { idArt: idArticle.value } });
          };

          //upadata likes
          const handleUpdateLike = async () => {
               try {
                    const { likesNumber } = await updateLikes("articles", idArticle.value, likes.value);
                    likes.value = likesNumber;
                    showAlertLiking();
               } catch (err) {
                    console.log(err.message);
               }
          };
          
          //show alert liking
          const showAlertLiking = () => {
               alertLiking.value = !alertLiking.value;

               setTimeout(() => {
                    alertLiking.value = !alertLiking.value;
               }, 3000)
          }

          return { data, goToArticle, handleUpdateLike, likes, alertLiking };
     },
};
</script>

<style lang="scss" scoped>

@import '../style/index.scss';


.badge-new {
     background-color: $mainColor;
     font-size: 12px;
     border: 0;
}



</style>
