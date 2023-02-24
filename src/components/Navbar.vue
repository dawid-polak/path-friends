<template>
     <div class="navbar">
          <div @click="showMenu" class="navbar-center w-full">
               <img src="../assets/img/t-black.png" alt="logo" />
          </div>
          <div v-if="hideMenu" class="menu">
               <ul>
                    <li @click="showMenu">
                        <router-link :to="{ name: 'home' }" class="menu-link">Strona Główna</router-link>
                    </li>
                    <li @click="showMenu">
                         <router-link :to="{ name: 'blog' }" class="menu-link">Blog</router-link>
                    </li>
                    <li @click="showMenu">
                         <router-link :to="{ name: 'account' }" class="menu-link">Konto</router-link>
                    </li>
               </ul>
          </div>
     </div>
</template>

<script>
import { ref } from "vue";

export default {
     setup() {

          const hideMenu = ref(false)

          const showMenu = () => {
               hideMenu.value = !hideMenu.value 
          }

          return { hideMenu, showMenu};
     },
};
</script>

<style lang="scss" scoped>
.navbar {
     top: 0;
     margin: 0;
     padding: 0;
     height: 90px;
     z-index: 100;
     position: fixed;
     background-color: #fff;
     display: block;


     .navbar-center {
          top: 0;
          margin: 0;
          padding: 0;
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
               height: 80%;
          }
     }

     .navbar-center:hover {
          cursor: pointer;
     }

     .menu {
          background-color: #fff;

          ul {

               text-align: center;
               font-size: 18px;
               font-weight: 200;

               li {
                    text-align: center;
                    .menu-link {
                         text-align: center;
                    }
               }
          }
     }
}
</style>
