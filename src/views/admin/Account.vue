<template>
     <div class="account">
          <nav class="py-5">
               <div ref="btns" @click="changeComponent" class="tabs tabs-boxed items-center">
                    <a class="tab" :class="{ 'tab-active': whichTab.add }">dodaj artykuł</a>
                    <a class="tab" :class="{ 'tab-active': whichTab.edit }">edytuj artykuł</a>
                    <a class="tab" :class="{ 'tab-active': whichTab.details }">szczegóły</a>
               </div>
          </nav>
          <AddArticle v-if="whichTab.add" />
          <EditArticle v-if="whichTab.edit" />
          <Details v-if="whichTab.details" />
          <div class="w-full text-center mt-10">
               <ButtonSignOut />
          </div>
     </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import AddArticle from "../../components/admin/AddArticle.vue";
import EditArticle from "../../components/admin/EditArticle.vue";
import Details from "../../components/admin/Details.vue";
import ButtonSignOut from "../../components/ButtonSignOut.vue";

import mainFirebase from "../../firebase/index.js";
import { onAuthStateChanged } from "firebase/auth";

export default {
     components: {
          AddArticle,
          EditArticle,
          Details,
          ButtonSignOut
     },
     setup() {
          // check if the user is logged in
          const router = useRouter();
          const { auth } = mainFirebase();

          onAuthStateChanged(auth, (user) => {
               if (user) {
                    router.push({ name: "account" });
               } else {
                    router.push({ name: "login" });
               }
          });

          //check whichTab was clicked
          const whichTab = ref({
               add: false,
               edit: false,
               details: false,
          });

          const changeComponent = (e) => {
               const textBtn = e.target.innerHTML;

               switch (textBtn) {
                    case "edytuj artykuł":
                         whichTab.value.edit = true;
                         whichTab.value.add = false;
                         whichTab.value.details = false;

                         break;
                    case "dodaj artykuł":
                         whichTab.value.edit = false;
                         whichTab.value.add = true;
                         whichTab.value.details = false;

                         break;
                    case "szczegóły":
                         whichTab.value.edit = false;
                         whichTab.value.add = false;
                         whichTab.value.details = true;

                         break;

                    default:
                         break;
               }
          };

          return { changeComponent, whichTab };
     },
};
</script>

<style lang="scss" scoped>
.account {
     margin-top: 90px;

     nav {
          display: flex;
          width: 100%;
          justify-content: center;
     }
}
</style>
