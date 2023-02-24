<template>
     <div class="alert-liking">
          <div class="alert alert-success shadow-lg">
               <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Dziękujemy, to dla nas bardzo wazne!    </span>
               </div>
          </div>
     </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.alert-liking {
     position: fixed;
     z-index: 1000;
     display: flex;
     top: 100px;
     right: 0;
     text-align: center;
     animation: show 0.5s ease-in-out forwards;
}

@keyframes show {
     0% {
          right: -1000px;
     }
     100% {
          right: 0;
     }
}
</style>
