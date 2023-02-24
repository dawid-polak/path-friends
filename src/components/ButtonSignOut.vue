<template>
     <div class="m-10">
          <button @click="signout" class="btn  btn-outline btn-secondary">Wyloguj się</button>
     </div>
</template>

<script>
import { ref } from "vue";
import mainFirebase from "../firebase/index.js";
import { signOut } from "firebase/auth";

export default {
     setup() {

        //singout from firebase
          const { auth } = mainFirebase();

          const signout = async () => {
               try {
                    const signoutnow = signOut(auth);
               } catch (error) {
                    console.log(error);
               }
          };

          return { signout };
     },
};
</script>

<style lang="scss" scoped></style>
