<template>
     <div class="log-in">
          <form @submit.prevent="logIn" class="w-full">
               
                    <div class="flex-col mx-0 text-center py-10 px-0 max-w-96">
                         <div class="">
                              <div class="text-center px-10">
                                   <h1 class="text-4xl font-bold pt-0">Zaloguj się!</h1>
                              </div>
                              <div class="card-body text-xl ">
                                   <div class="form-control m-auto">
                                        <input type="text" class="input input-bordered w-56 text-xl" v-model="mail" placeholder="E-mail" />
                                   </div>
                                   <div class="form-control m-auto">
                                        <input type="password" class="input input-bordered  w-56 text-xl" v-model="password" placeholder="Hasło"/>
                                   </div>
                                   <div class="form-control mt-6 m-auto">
                                        <button class="btn btn-outline w-36">Zaloguj się</button>
                                   </div>
                              </div>
                         </div>
                         <div class="mt-3">
                              <a href="" class="link link-primary">Zapomniałeś hasła?</a> <br />
                              <a href="" class="link link-primary">Nie masz konta?</a>
                         </div>
                    </div>
              
          </form>
     </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import mainFirebase from "../../firebase/index.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export default {
     setup() {
          const mail = ref("");
          const password = ref("");
          const { auth } = mainFirebase();
          const router = useRouter();

          onAuthStateChanged(auth, (user) => {
               if (user) {
                    router.push({ name: "account" });
               } else {
                    router.push({ name: "login" });
               }
          });

          const logIn = async () => {
               try {
                    const checkData = await signInWithEmailAndPassword(auth, mail.value, password.value);

                    mail.value = "";
                    password.value = "";

                    router.push({ name: "account" });
               } catch (error) {
                    console.log(error.message);
               }
          };

          return { mail, password, logIn };
     },
};
</script>

<style lang="scss" scoped>
.log-in {
     display: flex;
     width: 100%;
     justify-content: center;
     align-items: center;
     margin-top: 100px;
}
</style>
