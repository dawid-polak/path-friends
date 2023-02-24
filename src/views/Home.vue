<template>
     <div class="hero min-h-screen">
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
               <div class="max-w-xl">
                    <h1 class="mb-5 text-xl md:text-3xl font-black">"Góry milczą, wszystko co milczy nadaje się do przechowywania ludzkich tajemnic"</h1>
                    <p class="mb-5 text-sm">Józef Tischner</p>
               </div>
          </div>
     </div>

     <div class="invite"> 
          <h1 class="link font-black text-xl p-20 text-center">
               <router-link :to="{ name: 'blog' }">Blog</router-link>
          </h1>
     </div>
</template>

<script>

export default {
     setup() {
          return {};
     },
};
</script>

<style lang="scss" scoped>

.hero {
     background-image: url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80);
}
</style>
